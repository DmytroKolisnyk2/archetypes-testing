import { createReducer } from "@reduxjs/toolkit";
import { changeTestData } from "./block3-actions";

export const block3 = createReducer([], {
  [changeTestData.type]: (state, { payload }) => [...state.filter((item) => item.id !== payload.id), payload],
});
