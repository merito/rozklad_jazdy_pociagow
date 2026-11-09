#include "station_cell.h"
#include "menu_list_cell.h"
#include "palette.h"

#define PREMIUM_MARKER "\u2022 "

int16_t station_cell_height(void) { return menu_list_cell_height(); }

void station_cell_draw(GContext *ctx, const Layer *cell_layer,
                       const StationCellData *data, bool selected) {
  // The shared renderer paints the selection bar with title_color, so
  // selected premium rows get the blue highlight automatically.

  // On 1-bit platforms blue would render as black, so mark premium
  // stations with a bullet prefix instead.
  char title[128];
  if (data->premium && PBL_IF_BW_ELSE(true, false)) {
    snprintf(title, sizeof(title), PREMIUM_MARKER "%s", data->name);
  } else {
    snprintf(title, sizeof(title), "%s", data->name);
  }

  GColor title_color;
  if (data->premium) {
    title_color = PBL_IF_COLOR_ELSE(COL_PREMIUM_BLUE, GColorBlack);
  } else {
    title_color = GColorBlack;
  }

  menu_list_cell_draw(ctx, cell_layer, title, data->distance, title_color,
                      GColorDarkGray, true, selected);
}
