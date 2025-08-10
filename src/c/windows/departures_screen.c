#include "departures_screen.h"
#include "../data.h"

#define NUM_MENU_SECTIONS 1
#define NUM_FIRST_MENU_ITEMS 2
#define NUM_SECOND_MENU_ITEMS 1

#define MAX_DEPARTURE_COUNT 10
struct DepartureEntry s_departures[MAX_DEPARTURE_COUNT];
uint8_t s_departure_count = 0;

static Window *s_window;
MenuLayer *s_departures_menu_layer;

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
        menu_cell_basic_header_draw(ctx, cell_layer, "Najbliższe odjazdy");
      break;
  }
}

static void menu_draw_row_callback(GContext* ctx, const Layer *cell_layer, MenuIndex *cell_index, void *data) {
  // Determine which section we're going to draw in
  switch (cell_index->section) {
    case 0:
    {
      char combined_text[32];
      int index = cell_index->row;

      APP_LOG(APP_LOG_LEVEL_INFO, s_departures[index].timestamp);

      // snprintf(combined_text, sizeof(combined_text), "Dep %s", s_departures[index].timestamp);

      snprintf(combined_text, sizeof(combined_text), "%s +%s %s/%s", s_departures[index].timestamp, s_departures[index].delay, s_departures[index].platform, s_departures[index].track);

      menu_cell_basic_draw(ctx, cell_layer, s_departures[index].arrivalStation, combined_text, NULL);
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
  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_bounds(window_layer);

  s_departures_menu_layer = menu_layer_create(bounds);

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
  layer_add_child(window_layer, menu_layer_get_layer(s_departures_menu_layer));
}

static void prv_window_unload(Window *window) {
  menu_layer_destroy(s_departures_menu_layer);
  s_departure_count = 0;
}

void departures_screen_init(char *numerStacji, char *name) {
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

  s_window = window_create();
  window_set_window_handlers(s_window, (WindowHandlers) {
    .load = prv_window_load,
    .unload = prv_window_unload,
  });
  const bool animated = true;
  window_stack_push(s_window, animated);
}

void departures_screen_deinit(void) {
  window_destroy(s_window);
}