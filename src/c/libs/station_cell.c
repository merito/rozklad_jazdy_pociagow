#include "station_cell.h"

#define PREMIUM_MARKER "\u2022 "

// Height of a single text line for the given font (measured on a short,
// space-free sample so the measurement can never wrap).
static int16_t single_line_height(GFont font, GRect constraint) {
  return graphics_text_layout_get_content_size(
             "\u0141\u0104\u017b", font, constraint,
             GTextOverflowModeWordWrap, GTextAlignmentLeft)
      .h;
}

// Exact row height for rectangular platforms: the two text lines plus a
// small bottom gap, so no unused strip is left above the station name
// (the system menu rows are equally tight).
int16_t station_cell_height(void) {
  const GRect dummy = { {0, 0}, {144, 1000} };
  GFont title_font = fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD);
  GFont subtitle_font = fonts_get_system_font(FONT_KEY_GOTHIC_14);
  return single_line_height(title_font, dummy) +
         single_line_height(subtitle_font, dummy) + 3;
}

void station_cell_draw(GContext *ctx, const Layer *cell_layer,
                       const StationCellData *data, bool selected) {
  const GRect bounds = layer_get_bounds(cell_layer);
  const GRect text = PBL_IF_ROUND_ELSE(
      grect_inset(bounds, GEdgeInsets(6, 12, 6, 12)),
      grect_inset(bounds, GEdgeInsets(0, 4, 0, 4)));

  // MenuLayer fills the selected cell with its own (black) highlight before
  // calling us; premium stations get a blue highlight instead.
  if (selected && data->premium) {
    graphics_context_set_fill_color(
        ctx, PBL_IF_COLOR_ELSE(GColorCobaltBlue, GColorBlack));
    graphics_fill_rect(ctx, bounds, PBL_IF_ROUND_ELSE(bounds.size.h / 2, 0),
                       GCornerNone);
  }

  GFont title_font;
#if PBL_ROUND
  title_font = fonts_get_system_font(
      selected ? FONT_KEY_GOTHIC_24_BOLD : FONT_KEY_GOTHIC_20_BOLD);
#else
  title_font = fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD);
#endif
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

  // Keep the title on a single line with a trailing ellipsis: a wrapped
  // (multi-line) station name used to push the distance line out of the
  // cell. The distance must always stay visible.
  const int16_t title_height = single_line_height(title_font, text);
  const int16_t subtitle_height = single_line_height(subtitle_font, text);

  // Top-align (like the stock menu cells) instead of vertically centering:
  // centering added an empty strip above the name inside every row.
  const int16_t total_height = title_height + subtitle_height;
  int16_t y = text.origin.y;
#if PBL_ROUND
  y = text.origin.y + (int16_t)(text.size.h - total_height) / 2;
  if (y < text.origin.y) {
    y = text.origin.y;
  }
#else
  (void)total_height;
#endif

  const GRect title_box = { {text.origin.x, y}, {text.size.w, title_height} };
  const GRect subtitle_box = {
      {text.origin.x, y + title_height}, {text.size.w, subtitle_height}};

  GColor title_color;
  if (selected) {
    title_color = GColorWhite;  // MenuLayer fills the highlight background
  } else if (data->premium) {
    title_color = PBL_IF_COLOR_ELSE(GColorCobaltBlue, GColorBlack);
  } else {
    title_color = GColorBlack;
  }

  graphics_context_set_text_color(ctx, title_color);
  graphics_draw_text(ctx, title, title_font, title_box,
                     GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft,
                     NULL);

  graphics_context_set_text_color(ctx,
                                  selected ? GColorWhite : GColorDarkGray);
  graphics_draw_text(ctx, data->distance, subtitle_font, subtitle_box,
                     GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft,
                     NULL);
}
