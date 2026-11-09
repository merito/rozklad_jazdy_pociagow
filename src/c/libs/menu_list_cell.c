#include "menu_list_cell.h"

// Height of a single text line for the given font (measured on a short,
// space-free sample so the measurement can never wrap).
static int16_t single_line_height(GFont font, GRect constraint) {
  return graphics_text_layout_get_content_size(
             "\u0141\u0104\u017b", font, constraint,
             GTextOverflowModeWordWrap, GTextAlignmentLeft)
      .h;
}

// Advance width of a run, including a trailing space (content-size strips
// it, so measure with a sentinel glyph and subtract its width back off).
static int16_t run_advance(GFont font, const char *text) {
  char buf[80];
  snprintf(buf, sizeof(buf), "%s|", text);
  const GRect loose = { {0, 0}, {2000, 100} };
  const int16_t with = graphics_text_layout_get_content_size(
                           buf, font, loose, GTextOverflowModeFill,
                           GTextAlignmentLeft)
                           .w;
  const int16_t bar = graphics_text_layout_get_content_size(
                          "|", font, loose, GTextOverflowModeFill,
                          GTextAlignmentLeft)
                          .w;
  return with - bar;
}

int16_t menu_list_cell_height(void) {
  const GRect dummy = { {0, 0}, {144, 1000} };
  GFont title_font = fonts_get_system_font(FONT_KEY_GOTHIC_28_BOLD);
  GFont subtitle_font = fonts_get_system_font(FONT_KEY_GOTHIC_18);
  // Tight: just a hairline between stacked rows, no dead strip anywhere.
  return single_line_height(title_font, dummy) +
         single_line_height(subtitle_font, dummy);
}

void menu_list_cell_draw_runs(GContext *ctx, const Layer *cell_layer,
                              const char *title,
                              const MenuTextRun *runs, size_t num_runs,
                              GColor title_color, bool big_title,
                              bool selected) {
  const GRect bounds = layer_get_bounds(cell_layer);

  // Selected: paint the highlight in the row color (MenuLayer's own black
  // bar is overpainted), text stays white as set below. On 1-bit the
  // category colors are black, so this reproduces the stock negative.
  if (selected) {
    graphics_context_set_fill_color(ctx, PBL_IF_COLOR_ELSE(title_color, GColorBlack));
    graphics_fill_rect(ctx, bounds, PBL_IF_ROUND_ELSE(bounds.size.h / 2, 0),
                       GCornerNone);
  }

  const GRect text = PBL_IF_ROUND_ELSE(
      grect_inset(bounds, GEdgeInsets(6, 12, 6, 12)),
      grect_inset(bounds, GEdgeInsets(big_title ? 0 : 2, 4, 0, 4)));

  GFont title_font;
#if PBL_ROUND
  title_font = fonts_get_system_font(
      selected ? FONT_KEY_GOTHIC_24_BOLD : FONT_KEY_GOTHIC_20_BOLD);
#else
  title_font = fonts_get_system_font(big_title ? FONT_KEY_GOTHIC_28_BOLD
                                               : FONT_KEY_GOTHIC_18_BOLD);
#endif
  GFont subtitle_font = fonts_get_system_font(FONT_KEY_GOTHIC_18);

  const int16_t title_height = single_line_height(title_font, text);
  const int16_t subtitle_height = single_line_height(subtitle_font, text);

#if PBL_RECT
  // Big rows are top-aligned (stock-menu look, no empty strip above the
  // title); stock-sized rows stay vertically centered like system cells.
  int16_t y = text.origin.y - (big_title ? 2 : 0);
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
  }

  graphics_context_set_text_color(ctx, title_color);
  graphics_draw_text(ctx, title, title_font, title_box,
                     GTextOverflowModeTrailingEllipsis, GTextAlignmentLeft,
                     NULL);

  // Detail line: laid out run by run so each piece can keep its own color
  // (e.g. gray time, orange delay, gray platform).
  int16_t x = subtitle_box.origin.x;
  for (size_t i = 0; i < num_runs && x < subtitle_box.origin.x + subtitle_box.size.w; i++) {
    if (!runs[i].text || runs[i].text[0] == '\0') {
      continue;
    }
    GRect run_box = {{x, subtitle_box.origin.y},
                     {subtitle_box.size.w - (x - subtitle_box.origin.x),
                      subtitle_box.size.h}};
    graphics_context_set_text_color(
        ctx, selected ? GColorWhite : runs[i].color);
    graphics_draw_text(ctx, runs[i].text, subtitle_font, run_box,
                       GTextOverflowModeFill, GTextAlignmentLeft, NULL);
    x += run_advance(subtitle_font, runs[i].text);
  }
}

void menu_list_cell_draw(GContext *ctx, const Layer *cell_layer,
                         const char *title, const char *subtitle,
                         GColor title_color, GColor subtitle_color,
                         bool big_title, bool selected) {
  const MenuTextRun run = {subtitle, subtitle_color};
  menu_list_cell_draw_runs(ctx, cell_layer, title, &run, 1, title_color,
                           big_title, selected);
}
