#pragma once
#include <pebble.h>

// Shared accent palette. Colors on the watch's transflective e-paper wash
// out, so everything sits darker and more saturated than the "web" hues:
// royal blue instead of cobalt, deep green/orange, and a true dark red.
#define COL_PREMIUM_BLUE GColorFromRGB(0, 71, 171)
#define COL_CAT_GREEN GColorFromRGB(0, 107, 0)
#define COL_CAT_ORANGE GColorFromRGB(186, 69, 0)
#define COL_DELAY_RED GColorFromRGB(198, 0, 0)
// Detail-line body text: very dark gray, almost black (1-bit keeps black).
#define COL_TEXT_DIM PBL_IF_COLOR_ELSE(GColorFromRGB(26, 26, 26), GColorBlack)
