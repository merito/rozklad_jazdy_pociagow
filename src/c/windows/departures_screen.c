#include "departures_screen.h"
#include "status_bar.h"
#include "../libs/menu_list_cell.h"
#include "../data.h"
#include <stdlib.h>
#include <strings.h>

#define NUM_MENU_SECTIONS 1
#define NUM_FIRST_MENU_ITEMS 2
#define NUM_SECOND_MENU_ITEMS 1

#define MAX_DEPARTURE_COUNT 10
struct DepartureEntry s_departures[MAX_DEPARTURE_COUNT];
uint8_t s_departure_count = 0;
char stationNameHeader[100];

static Window *s_window;
CustomStatusBarLayer *custom_status_bar;
MenuLayer *s_departures_menu_layer;

bool departuresPending = true;

// Row palette by train category (first token of trainCode, e.g. "EIP 3514"):
// EIP/EIC/EC/EN blue, IC/TLK/EX/IR green, everything else orange.
// Placeholder rows ("-", "No departures") keep the stock black/gray look.
static bool prv_category_color(const char *train_code, GColor *out) {
  char prefix[8];
  size_t i = 0;
  while (train_code && train_code[i] && train_code[i] != ' ' &&
         i < sizeof(prefix) - 1) {
    prefix[i] = train_code[i];
    i++;
  }
  prefix[i] = '\0';
  if (prefix[0] == '\0' || prefix[0] == '-') {
    return false;
  }
  static const char *const blue[] = {"EIP", "EIC", "EC", "EN"};
  static const char *const green[] = {"IC", "TLK", "EX", "IR"};
  for (size_t k = 0; k < 4; k++) {
    if (strcasecmp(prefix, blue[k]) == 0) {
      *out = PBL_IF_COLOR_ELSE(GColorCobaltBlue, GColorBlack);
      return true;
    }
  }
  for (size_t k = 0; k < 4; k++) {
    if (strcasecmp(prefix, green[k]) == 0) {
      *out = PBL_IF_COLOR_ELSE(GColorFromRGB(0, 128, 0), GColorBlack);
      return true;
    }
  }
  *out = PBL_IF_COLOR_ELSE(GColorFromRGB(210, 95, 0), GColorBlack);
  return true;
}


static uint16_t menu_get_num_sections_callback(MenuLayer *menu_layer, void *data) {
  return NUM_MENU_SECTIONS;
}

static uint16_t menu_get_num_rows_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch (section_index) {
    case 0:
      return s_departure_count;
    default:
      return 0;
  }
}

static int16_t menu_get_header_height_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  return MENU_CELL_BASIC_HEADER_HEIGHT;
}

static void menu_draw_header_callback(GContext* ctx, const Layer *cell_layer, uint16_t section_index, void *data) {
  // Determine which section we're working with
  switch (section_index) {
    case 0:
        // Draw title text in the section header
        menu_cell_basic_header_draw(ctx, cell_layer, stationNameHeader);
      break;
  }
}

static void menu_draw_row_callback(GContext* ctx, const Layer *cell_layer, MenuIndex *cell_index, void *data) {
  // Determine which section we're going to draw in
  switch (cell_index->section) {
    case 0:
    {
      char time_run[16], delay_run[16], rest_run[32];
      int index = cell_index->row;

      APP_LOG(APP_LOG_LEVEL_INFO, s_departures[index].timestamp);

      snprintf(time_run, sizeof(time_run), "%s ", s_departures[index].timestamp);
      snprintf(delay_run, sizeof(delay_run), "+%s ", s_departures[index].delay);
      snprintf(rest_run, sizeof(rest_run), "%s/%s %s", s_departures[index].platform, s_departures[index].track, s_departures[index].trainCode);

      // Delay severity: up to 5 min gray (status quo), up to 15 min
      // orange, above 15 min red. 1-bit keeps the plain gray line.
      const int delay_min = atoi(s_departures[index].delay);
      GColor delay_color = GColorDarkGray;
      if (delay_min > 15) {
        delay_color = PBL_IF_COLOR_ELSE(GColorRed, GColorDarkGray);
      } else if (delay_min > 5) {
        delay_color = PBL_IF_COLOR_ELSE(GColorFromRGB(210, 95, 0),
                                        GColorDarkGray);
      }

      const MenuTextRun runs[] = {
          {time_run, GColorDarkGray},
          {delay_run, delay_color},
          {rest_run, GColorDarkGray},
      };

      GColor cat_color;
      const bool colored =
          prv_category_color(s_departures[index].trainCode, &cat_color);
      // Only the destination name carries the category color; the detail
      // line stays gray apart from the severity-colored delay.
      menu_list_cell_draw_runs(ctx, cell_layer,
                          s_departures[index].arrivalStation, runs, 3,
                          colored ? cat_color : GColorBlack, false,
                          menu_layer_is_index_selected(s_departures_menu_layer,
                                                       cell_index));
      break;
    }
  }
}

static void menu_select_callback(MenuLayer *menu_layer, MenuIndex *cell_index, void *data) {
}

#ifdef PBL_ROUND 
static int16_t get_cell_height_callback(MenuLayer *menu_layer, MenuIndex *cell_index, void *callback_context) { 
  if (menu_layer_is_index_selected(menu_layer, cell_index)) {
    switch (cell_index->row) {
      case 0:
        return MENU_CELL_ROUND_FOCUSED_SHORT_CELL_HEIGHT;
        break;
      default:
        return MENU_CELL_ROUND_FOCUSED_TALL_CELL_HEIGHT;
    }
  } else {
    return MENU_CELL_ROUND_UNFOCUSED_SHORT_CELL_HEIGHT;
  }
}
#endif

static void prv_window_load(Window *window) {
  departuresPending = true;

  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_bounds(window_layer);

  custom_status_bar = custom_status_bar_layer_create(BAR_HEIGHT, GColorBlack, ICON_WIDTH_HEIGHT);
  s_departures_menu_layer = menu_layer_create(GRect(0, BAR_HEIGHT, bounds.size.w, bounds.size.h - BAR_HEIGHT));

  // MenuLayer paints its own default (black) highlight bar before calling
  // draw_row, which flashes during scrolling under our category-colored
  // bars. Make the built-in highlight transparent; the row renderer paints
  // the selection itself.
  menu_layer_set_highlight_colors(s_departures_menu_layer, GColorClear,
                                  GColorWhite);

  menu_layer_set_callbacks(s_departures_menu_layer, NULL, (MenuLayerCallbacks){
    .get_num_sections = menu_get_num_sections_callback,
    .get_num_rows = menu_get_num_rows_callback,
    .get_header_height = PBL_IF_RECT_ELSE(menu_get_header_height_callback, NULL),
    .draw_header = PBL_IF_RECT_ELSE(menu_draw_header_callback, NULL),
    .draw_row = menu_draw_row_callback,
    .select_click = menu_select_callback,
    .get_cell_height = PBL_IF_ROUND_ELSE(get_cell_height_callback, NULL),
  });

  menu_layer_set_click_config_onto_window(s_departures_menu_layer, window);
  layer_add_child(window_layer, custom_status_bar);
  layer_add_child(window_layer, menu_layer_get_layer(s_departures_menu_layer));

  COPY_STRING(s_departures[s_departure_count].trainCode, "-");
  COPY_STRING(s_departures[s_departure_count].timestamp, "Please wait");
  COPY_STRING(s_departures[s_departure_count].track, "-");
  COPY_STRING(s_departures[s_departure_count].platform, "-");
  COPY_STRING(s_departures[s_departure_count].delay, "-");
  COPY_STRING(s_departures[s_departure_count].arrivalStation, "Loading...");

  s_departure_count++;

  menu_layer_reload_data(s_departures_menu_layer);
}

static void prv_window_unload(Window *window) {
  custom_status_bar_layer_destroy(custom_status_bar);
  menu_layer_destroy(s_departures_menu_layer);
  s_departure_count = 0;
}

void departures_screen_init(char *numerStacji, char *name) {
  if (strcmp(numerStacji, "0") == 0) {
    COPY_STRING(s_departures[s_departure_count].trainCode, "-");
    COPY_STRING(s_departures[s_departure_count].timestamp, "Go back");
    COPY_STRING(s_departures[s_departure_count].track, "-");
    COPY_STRING(s_departures[s_departure_count].platform, "-");
    COPY_STRING(s_departures[s_departure_count].delay, "-");
    COPY_STRING(s_departures[s_departure_count].arrivalStation, "No departures");

    s_departure_count++;
  } else {
    COPY_STRING(stationNameHeader, name);

    DictionaryIterator *iter;

    AppMessageResult result = app_message_outbox_begin(&iter);
    if (result != APP_MSG_OK) {
      APP_LOG(APP_LOG_LEVEL_ERROR, "Failed to send data request: %d", result);
      return;
    }

    dict_write_cstring(iter, MESSAGE_KEY_numerStacji, numerStacji);
    dict_write_cstring(iter, MESSAGE_KEY_command, "departures");

    APP_LOG(APP_LOG_LEVEL_INFO, "%s", numerStacji);

    result = app_message_outbox_send();

    if (result != APP_MSG_OK) {
      APP_LOG(APP_LOG_LEVEL_ERROR, "Failed to send data request outbox: %d", result);
    }
  }

  s_window = window_create();
  window_set_window_handlers(s_window, (WindowHandlers) {
    .load = prv_window_load,
    .unload = prv_window_unload,
  });
  const bool animated = true;
  window_stack_push(s_window, animated);

  update_time();
  // Register with TickTimerService
  tick_timer_service_subscribe(MINUTE_UNIT, tick_handler);

}

void departures_screen_deinit(void) {
  departuresPending = true;
  window_destroy(s_window);
}