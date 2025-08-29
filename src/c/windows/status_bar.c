#include "status_bar.h"

CustomStatusBarLayer *custom_status_bar;

void update_time() {
  // Get a tm structure
  time_t temp = time(NULL);
  struct tm *tick_time = localtime(&temp);

  // Write the current hours and minutes into a buffer
  static char s_buffer[8];
  strftime(s_buffer, sizeof(s_buffer), clock_is_24h_style() ?
                                          "%H:%M" : "%I:%M", tick_time);

  // Display this time on the TextLayer
  custom_status_bar_layer_set_text(custom_status_bar, CSB_TEXT_CENTER, s_buffer);
}

void tick_handler(struct tm *tick_time, TimeUnits units_changed) {
    update_time();
}