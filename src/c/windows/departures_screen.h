#pragma once

#include <pebble.h>
#include "../data.h"

extern MenuLayer *s_departures_menu_layer;

#define MAX_DEPARTURE_COUNT 10
extern struct DepartureEntry s_departures[MAX_DEPARTURE_COUNT];
extern uint8_t s_departure_count;

bool departuresPending;

void departures_screen_init(char *crs, char *stationName);
void departures_screen_deinit();