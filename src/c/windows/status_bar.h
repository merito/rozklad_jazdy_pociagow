#include "../libs/custom_status_bar.h"

#ifdef PBL_PLATFORM_EMERY
#define BAR_HEIGHT 30
#define ICON_WIDTH_HEIGHT 24
#define STATUS_BAR_FONT FONT_KEY_GOTHIC_24_BOLD
#else
#define BAR_HEIGHT 22
#define ICON_WIDTH_HEIGHT 18
#define STATUS_BAR_FONT FONT_KEY_GOTHIC_18
#endif

extern CustomStatusBarLayer *custom_status_bar;

void update_time();
void tick_handler(struct tm *tick_time, TimeUnits units_changed);