import { configureStore } from "@reduxjs/toolkit";
import { stepsSlice } from "./states/steps";

export const store = configureStore({
  reducer: {
    steps: stepsSlice.reducer,
  },
});
