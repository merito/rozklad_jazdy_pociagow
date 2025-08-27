#include <pebble.h>
#include "windows/departures_screen.h"
#include "data.h"

#define NUM_MENU_SECTIONS 1

typedef struct Station {
  char name[100];
  char numerStacji[8];
  char distance[30];
} Station;

#define STATION_COUNT 5
static struct Station s_stations[STATION_COUNT];
static uint8_t s_station_count = 0;

static Window *s_window;
static TextLayer *s_text_layer;
static MenuLayer *s_station_menu_layer;

static bool locationPending = true;

static uint16_t menu_get_num_sections_callback(MenuLayer *menu_layer, void *data) {
  return NUM_MENU_SECTIONS;
}

static uint16_t menu_get_num_rows_callback(MenuLayer *menu_layer, uint16_t section_index, void *data) {
  return s_station_count;
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
  }
}

static void menu_draw_row_callback(GContext* ctx, const Layer *cell_layer, MenuIndex *cell_index, void *data) {
  // Determine which section we're going to draw in
  switch (cell_index->section) {
    case 0:
      menu_cell_basic_draw(ctx, cell_layer, s_stations[cell_index->row].name, s_stations[cell_index->row].distance, NULL);
      break;
  }
}

static void menu_select_callback(MenuLayer *menu_layer, MenuIndex *cell_index, void *data) {
  departures_screen_init(s_stations[cell_index->row].numerStacji, s_stations[cell_index->row].name);
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

  s_text_layer = text_layer_create(GRect(0, 0, bounds.size.w, bounds.size.h));
  s_station_menu_layer = menu_layer_create(bounds);

  menu_layer_set_callbacks(s_station_menu_layer, NULL, (MenuLayerCallbacks){
    .get_num_sections = menu_get_num_sections_callback,
    .get_num_rows = menu_get_num_rows_callback,
    .get_header_height = PBL_IF_RECT_ELSE(menu_get_header_height_callback, NULL),
    .draw_header = PBL_IF_RECT_ELSE(menu_draw_header_callback, NULL),
    .draw_row = menu_draw_row_callback,
    .select_click = menu_select_callback,
    .get_cell_height = PBL_IF_ROUND_ELSE(get_cell_height_callback, NULL),
  });

  menu_layer_set_click_config_onto_window(s_station_menu_layer, window);
  layer_add_child(window_layer, menu_layer_get_layer(s_station_menu_layer));

  COPY_STRING(s_stations[s_station_count].name, "Location pending...");
  COPY_STRING(s_stations[s_station_count].numerStacji, "0");
  COPY_STRING(s_stations[s_station_count].distance, "Please wait");

  s_station_count++;

  menu_layer_reload_data(s_station_menu_layer);
  layer_mark_dirty(menu_layer_get_layer(s_station_menu_layer));
}

static void prv_window_unload(Window *window) {
  text_layer_destroy(s_text_layer);
  menu_layer_destroy(s_station_menu_layer);
}

void s_depatures_callback(DictionaryIterator *iter) {
  EXTRACT_TUPLE(iter, timestamp, timestamp);
  EXTRACT_TUPLE(iter, track, track);
  EXTRACT_TUPLE(iter, platform, platform);
  EXTRACT_TUPLE(iter, delay, delay);
  EXTRACT_TUPLE(iter, arrivalStation, arrivalStation);

  COPY_STRING(s_departures[s_departure_count].timestamp, timestamp);
  COPY_STRING(s_departures[s_departure_count].track, track);
  COPY_STRING(s_departures[s_departure_count].platform, platform);
  COPY_STRING(s_departures[s_departure_count].delay, delay);
  COPY_STRING(s_departures[s_departure_count].arrivalStation, arrivalStation);

  s_departure_count++;

  menu_layer_reload_data(s_departures_menu_layer);
}

void s_closest_station_callback(DictionaryIterator *iter) {
  if (locationPending) {
    s_station_count = 0;
    locationPending = false;
  }
  
  EXTRACT_TUPLE(iter, name, name);
  EXTRACT_TUPLE(iter, numerStacji, numerStacji);
  EXTRACT_TUPLE(iter, distance, distance);

  COPY_STRING(s_stations[s_station_count].name, name);
  COPY_STRING(s_stations[s_station_count].numerStacji, numerStacji);
  COPY_STRING(s_stations[s_station_count].distance, distance);

  s_station_count++;

  menu_layer_reload_data(s_station_menu_layer);
  layer_mark_dirty(menu_layer_get_layer(s_station_menu_layer));
}

static void inbox_received_callback(DictionaryIterator *iter, void *context) {
  EXTRACT_TUPLE(iter, messageType, messageType);
  
  if (messageType) {
    if (strcmp(messageType, "stationList") == 0) {
      s_closest_station_callback(iter);
    } else if (strcmp(messageType, "departureList") == 0) {
      s_depatures_callback(iter);
    }
  }
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

static void prv_init(void) {
  app_message_register_inbox_received(inbox_received_callback);
  app_message_register_inbox_dropped(inbox_dropped_callback);
  app_message_register_outbox_failed(outbox_failed_callback);
  app_message_register_outbox_sent(outbox_sent_callback);

  // Open AppMessage
  const int inbox_size = 1280;
  const int outbox_size = 1280;
  app_message_open(inbox_size, outbox_size);

  s_window = window_create();
  window_set_window_handlers(s_window, (WindowHandlers) {
    .load = prv_window_load,
    .unload = prv_window_unload,
  });
  const bool animated = true;
  window_stack_push(s_window, animated);
}

static void prv_deinit(void) {
  window_destroy(s_window);
  s_station_count = 0;
}

int main(void) {
  prv_init();

  APP_LOG(APP_LOG_LEVEL_DEBUG, "Done initializing, pushed window: %p", s_window);

  app_event_loop();
  prv_deinit();
}
