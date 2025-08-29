#include "../libs/custom_status_bar.h"

#define BAR_HEIGHT 22
#define ICON_WIDTH_HEIGHT 18

extern CustomStatusBarLayer *custom_status_bar;

void update_time();
void tick_handler(struct tm *tick_time, TimeUnits units_changed);