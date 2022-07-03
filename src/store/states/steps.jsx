import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../../service/localStorageService";

let initialStateDefault = {
  page: 1,
  steps: [],
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState: localStorageService.get("steps") || initialStateDefault,
  reducers: {
    addStep: (state, action) => ({
      ...state,
      steps: [...state.steps, action.payload],
    }),
    nextStep: (state) => ({
      ...state,
      page: state.page + 1,
    }),
  },
});

export const { addStep, nextStep } = stepsSlice.actions;

export default stepsSlice.reducer;
