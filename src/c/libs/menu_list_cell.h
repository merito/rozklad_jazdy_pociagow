#pragma once
#include <pebble.h>

// Shared two-line menu row renderer with explicit text colors.
// big_title=true: GOTHIC_24_BOLD title, top-aligned (closest-stations list;
// pair it with menu_list_cell_height()). big_title=false: stock-sized
// GOTHIC_18_BOLD title, vertically centered (departures list).
// Selected rows always render white text over the highlight painted by
// MenuLayer (callers may overpaint the highlight first, see station cells).
void menu_list_cell_draw(GContext *ctx, const Layer *cell_layer,
                         const char *title, const char *subtitle,
                         GColor title_color, GColor subtitle_color,
                         bool big_title, bool selected);

// Exact row height for the big_title layout on rectangular platforms.
int16_t menu_list_cell_height(void);
