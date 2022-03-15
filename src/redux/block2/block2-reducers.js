import { createReducer } from "@reduxjs/toolkit";
import { changeTestData } from "./block2-actions";

export const block2 = createReducer([], {
  [changeTestData.type]: (state, { payload }) => [...state.filter((item) => item.id !== payload.id), payload],
});
