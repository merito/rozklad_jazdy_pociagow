#include "station_cell.h"

#define PREMIUM_MARKER "\u2022 "

void station_cell_draw(GContext *ctx, const Layer *cell_layer,
                       const StationCellData *data, bool selected) {
  const GRect bounds = layer_get_bounds(cell_layer);
  const GRect text = PBL_IF_ROUND_ELSE(
      grect_inset(bounds, GEdgeInsets(6, 12, 6, 12)),
      grect_inset(bounds, GEdgeInsets(4)));

  GFont title_font = fonts_get_system_font(PBL_IF_ROUND_ELSE(
      FONT_KEY_GOTHIC_24_BOLD, FONT_KEY_GOTHIC_18_BOLD));
  GFont subtitle_font = fonts_get_system_font(
      PBL_IF_ROUND_ELSE(FONT_KEY_GOTHIC_18, FONT_KEY_GOTHIC_14));

  // On 1-bit platforms blue would render as black, so mark premium
  // stations with a bullet prefix instead.
  char title[128];
  if (data->premium && PBL_IF_BW_ELSE(true, false)) {
    snprintf(title, sizeof(title), PREMIUM_MARKER "%s", data->name);
  } else {
    snprintf(title, sizeof(title), "%s", data->name);
  }

  GSize title_size = graphics_text_layout_get_content_size(
      title, title_font, text, GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft);
  GSize subtitle_size = graphics_text_layout_get_content_size(
      data->distance, subtitle_font, text, GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft);

  const int16_t total_height = title_size.h + subtitle_size.h;
  int16_t y = text.origin.y + (int16_t)(text.size.h - total_height) / 2;
  if (y < text.origin.y) {
    y = text.origin.y;
  }

  const GRect title_box = { {text.origin.x, y}, {text.size.w, title_size.h} };
  const GRect subtitle_box = {
      {text.origin.x, y + title_size.h}, {text.size.w, subtitle_size.h}};

  GColor title_color;
  if (selected) {
    title_color = GColorWhite;  // MenuLayer fills the highlight background
  } else if (data->premium) {
    title_color = PBL_IF_COLOR_ELSE(GColorCobaltBlue, GColorBlack);
  } else {
    title_color = GColorBlack;
  }

  graphics_context_set_text_color(ctx, title_color);
  graphics_draw_text(ctx, title, title_font, title_box, GTextOverflowModeTrailingEllipsis,
                     GTextAlignmentLeft, NULL);

  graphics_context_set_text_color(ctx,
                                  selected ? GColorWhite : GColorDarkGray);
  graphics_draw_text(ctx, data->distance, subtitle_font, subtitle_box,
                     GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft, NULL);
}
