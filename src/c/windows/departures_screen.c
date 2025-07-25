#include "departures_screen.h"
#include "../data.h"

#define NUM_MENU_SECTIONS 2
#define NUM_FIRST_MENU_ITEMS 2
#define NUM_SECOND_MENU_ITEMS 1

#define MAX_DEPARTURE_COUNT 1
static struct DepartureEntry s_departures[MAX_DEPARTURE_COUNT];
static uint8_t s_departure_count = 0;
static uint8_t s_available_departures = 0;

static Window *s_window;
static MenuLayer *s_departures_menu_layer;

static void inbox_received_callback(DictionaryIterator *iter, void *context) {
  Tuple *count_tuple = dict_find(iter, MESSAGE_KEY_count);
  if (!count_tuple) {
    APP_LOG(APP_LOG_LEVEL_ERROR, "No departure data received");
    return;
  }
  uint8_t count = count_tuple->value->uint8;

  s_available_departures = count > MAX_DEPARTURE_COUNT ? MAX_DEPARTURE_COUNT : count;

  APP_LOG(APP_LOG_LEVEL_DEBUG, "Set available departures to %d", s_available_departures);

  if (s_available_departures == 0) {
    APP_LOG(APP_LOG_LEVEL_DEBUG, "No departures received");
    // no_departures();
    return;
  }

  EXTRACT_TUPLE(iter, trainCode, trainCode);
  EXTRACT_TUPLE(iter, timestamp, timestamp);
  EXTRACT_TUPLE(iter, track, track);
  EXTRACT_TUPLE(iter, platform, platform);
  EXTRACT_TUPLE(iter, delay, delay);
  EXTRACT_TUPLE(iter, arrivalStation, arrivalStation)

  COPY_STRING(s_departures[s_departure_count].trainCode, trainCode);
  COPY_STRING(s_departures[s_departure_count].timestamp, timestamp);
  COPY_STRING(s_departures[s_departure_count].track, track);
  COPY_STRING(s_departures[s_departure_count].platform, platform);
  COPY_STRING(s_departures[s_departure_count].delay, delay);
  COPY_STRING(s_departures[s_departure_count].arrivalStation, arrivalStation);
  // to_local_time(timestamp, s_departures[s_departure_count].timestamp);

  s_departure_count++;

  APP_LOG(APP_LOG_LEVEL_DEBUG, "Received departure %d: %s, %s, %s, %s", s_departure_count, s_departures[s_departure_count - 1].trainCode,
          s_departures[s_departure_count - 1].arrivalStation, s_departures[s_departure_count - 1].timestamp,
          s_departures[s_departure_count - 1].delay);

  // if (s_departure_count == s_available_departures) {
  //   departures_load_complete();
  // }
}

static void inbox_dropped_callback(AppMessageResult reason, void *context) {
  APP_LOG(APP_LOG_LEVEL_ERROR, "Message dropped!");
}

static void outbox_failed_callback(DictionaryIterator *iterator, AppMessageResult reason, void *context) {
  APP_LOG(APP_LOG_LEVEL_ERROR, "Outbox send failed!");
}

static void outbox_sent_callback(DictionaryIterator *iterator, void *context) {
  APP_LOG(APP_LOG_LEVEL_INFO, "Outbox send success!");
}

static uint16_t menu_get_num_sections_callback(MenuLayer *menu_layer, void *data) {
  return NUM_MENU_SECTIONS;
}

static uint16_t menu_get_num_rows_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  switch (section_index) {
    case 0:
      return NUM_FIRST_MENU_ITEMS;
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
        menu_cell_basic_header_draw(ctx, cell_layer, "Najbliższe stacje");
      break;
    case 1:
        menu_cell_basic_header_draw(ctx, cell_layer, "Extra");
      break;
  }
}

static void menu_draw_row_callback(GContext* ctx, const Layer *cell_layer, MenuIndex *cell_index, void *data) {
  // Determine which section we're going to draw in
  switch (cell_index->section) {
    case 0:
      // Use the row to specify which item we'll draw
      switch (cell_index->row) {
        case 0:
          // This is a basic menu item with a title and subtitle
          menu_cell_basic_draw(ctx, cell_layer, "Wrocław Główny", NULL, NULL);
          break;
        case 1:
          // This is a basic menu icon with a cycling icon
          menu_cell_basic_draw(ctx, cell_layer, "Wrocław Szczepin", NULL, NULL);
          break;
      }
      break;
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
}

void departures_screen_init(char *crs, char *stationName) {
  app_message_register_inbox_received(inbox_received_callback);
  app_message_register_inbox_dropped(inbox_dropped_callback);
  app_message_register_outbox_failed(outbox_failed_callback);
  app_message_register_outbox_sent(outbox_sent_callback);

  // Open AppMessage
  const int inbox_size = 128;
  const int outbox_size = 128;
  app_message_open(inbox_size, outbox_size);

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