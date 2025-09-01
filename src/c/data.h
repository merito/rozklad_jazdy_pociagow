#pragma once

#include <pebble.h>

#define EXTRACT_TUPLE(iter, key, var)                          \
  Tuple *var##_tuple = dict_find(iter, MESSAGE_KEY_##key);     \
  if (!var##_tuple) {                                          \
    APP_LOG(APP_LOG_LEVEL_ERROR, "No " #key " data received"); \
    return;                                                    \
  }                                                            \
  char *var = var##_tuple->value->cstring;

#define EXTRACT_INT(iter, key, var)                            \
  Tuple *var##_tuple = dict_find(iter, MESSAGE_KEY_##key);     \
  if (!var##_tuple) {                                          \
    APP_LOG(APP_LOG_LEVEL_ERROR, "No " #key " data received"); \
    return;                                                    \
  }                                                            \
  int var = var##_tuple->value->int32;

#define COPY_STRING(dest, src)          \
  strncpy(dest, src, sizeof(dest) - 1); \
  dest[sizeof(dest) - 1] = '\0';

typedef struct DepartureEntry {
  char trainCode[50];
  char timestamp[30];
  char track[10];
  char platform[10];
  char delay[10];
  char arrivalStation[100];
} DepartureEntry;