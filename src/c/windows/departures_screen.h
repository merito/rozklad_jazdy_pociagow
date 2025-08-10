#pragma once

#include <pebble.h>
#include "../data.h"

static MenuLayer *s_departures_menu_layer;

#define MAX_DEPARTURE_COUNT 4
static struct DepartureEntry s_departures[MAX_DEPARTURE_COUNT];
static uint8_t s_departure_count;

void departures_screen_init(char *crs, char *stationName);
void departures_screen_deinit();