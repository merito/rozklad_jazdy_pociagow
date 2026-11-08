#pragma once
#include <pebble.h>

typedef struct {
  const char *name;
  const char *distance;
  bool premium;
} StationCellData;

// Custom menu row renderer for the closest-stations list.
// Premium stations are drawn in blue (color platforms) or prefixed
// with a bullet on black-and-white ones. `selected` rows keep the
// inverted palette drawn by MenuLayer (white text on highlight).
void station_cell_draw(GContext *ctx, const Layer *cell_layer,
                       const StationCellData *data, bool selected);

// Exact row height (rectangular platforms) so MenuLayer rows contain no
// empty strip above the station name.
int16_t station_cell_height(void);
