import { combineReducers } from "@reduxjs/toolkit";

import { currentCityReducer } from "./currentCitySlice";

export const rootReducer = combineReducers({
  currentCity: currentCityReducer,
});
