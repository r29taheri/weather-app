import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentCity {
  name: string;
}

export const initialState = {
  name: "",
} as CurrentCity;

const currentCitySlie = createSlice({
  name: "currentCity",
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<CurrentCity>) {
      state.name = action.payload.name;
    },
  },
});

export const { setCurrentCity } = currentCitySlie.actions;
export const currentCityReducer = currentCitySlie.reducer;
