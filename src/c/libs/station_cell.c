#include "station_cell.h"
#include "menu_list_cell.h"

#define PREMIUM_MARKER "\u2022 "

int16_t station_cell_height(void) { return menu_list_cell_height(); }

void station_cell_draw(GContext *ctx, const Layer *cell_layer,
                       const StationCellData *data, bool selected) {
  // MenuLayer fills the selected cell with its own (black) highlight before
  // calling us; premium stations get a blue highlight instead.
  if (selected && data->premium) {
    graphics_context_set_fill_color(
        ctx, PBL_IF_COLOR_ELSE(GColorCobaltBlue, GColorBlack));
    const GRect bounds = layer_get_bounds(cell_layer);
    graphics_fill_rect(ctx, bounds, PBL_IF_ROUND_ELSE(bounds.size.h / 2, 0),
                       GCornerNone);
  }

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
    title_color = PBL_IF_COLOR_ELSE(GColorCobaltBlue, GColorBlack);
  } else {
    title_color = GColorBlack;
  }

  menu_list_cell_draw(ctx, cell_layer, title, data->distance, title_color,
                      GColorDarkGray, true, selected);
}
