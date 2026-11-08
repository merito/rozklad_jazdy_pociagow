#include "menu_list_cell.h"

// Height of a single text line for the given font (measured on a short,
// space-free sample so the measurement can never wrap).
static int16_t single_line_height(GFont font, GRect constraint) {
  return graphics_text_layout_get_content_size(
             "\u0141\u0104\u017b", font, constraint,
             GTextOverflowModeWordWrap, GTextAlignmentLeft)
      .h;
}

int16_t menu_list_cell_height(void) {
  const GRect dummy = { {0, 0}, {144, 1000} };
  GFont title_font = fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD);
  GFont subtitle_font = fonts_get_system_font(FONT_KEY_GOTHIC_14);
  return single_line_height(title_font, dummy) +
         single_line_height(subtitle_font, dummy) + 3;
}

void menu_list_cell_draw(GContext *ctx, const Layer *cell_layer,
                         const char *title, const char *subtitle,
                         GColor title_color, GColor subtitle_color,
                         bool big_title, bool selected) {
  const GRect bounds = layer_get_bounds(cell_layer);
  const GRect text = PBL_IF_ROUND_ELSE(
      grect_inset(bounds, GEdgeInsets(6, 12, 6, 12)),
      grect_inset(bounds, GEdgeInsets(big_title ? 0 : 2, 4, 0, 4)));

  GFont title_font;
#if PBL_ROUND
  title_font = fonts_get_system_font(
      selected ? FONT_KEY_GOTHIC_24_BOLD : FONT_KEY_GOTHIC_20_BOLD);
#else
  title_font = fonts_get_system_font(big_title ? FONT_KEY_GOTHIC_24_BOLD
                                               : FONT_KEY_GOTHIC_18_BOLD);
#endif
  GFont subtitle_font = fonts_get_system_font(
      PBL_IF_ROUND_ELSE(FONT_KEY_GOTHIC_18, FONT_KEY_GOTHIC_14));

  const int16_t title_height = single_line_height(title_font, text);
  const int16_t subtitle_height = single_line_height(subtitle_font, text);

#if PBL_RECT
  // Big rows are top-aligned (stock-menu look, no empty strip above the
  // title); stock-sized rows stay vertically centered like system cells.
  int16_t y = text.origin.y;
  if (!big_title) {
    y = text.origin.y +
        (int16_t)(text.size.h - (title_height + subtitle_height)) / 2;
    if (y < text.origin.y) {
      y = text.origin.y;
    }
  }
#else
  int16_t y = text.origin.y +
              (int16_t)(text.size.h - (title_height + subtitle_height)) / 2;
  if (y < text.origin.y) {
    y = text.origin.y;
  }
#endif

  const GRect title_box = { {text.origin.x, y}, {text.size.w, title_height} };
  const GRect subtitle_box = {
      {text.origin.x, y + title_height}, {text.size.w, subtitle_height}};

  if (selected) {
    title_color = GColorWhite;
    subtitle_color = GColorWhite;
  }

  graphics_context_set_text_color(ctx, title_color);
  graphics_draw_text(ctx, title, title_font, title_box,
                     GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft,
                     NULL);

  graphics_context_set_text_color(ctx, subtitle_color);
  graphics_draw_text(ctx, subtitle, subtitle_font, subtitle_box,
                     GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft,
                     NULL);
}
