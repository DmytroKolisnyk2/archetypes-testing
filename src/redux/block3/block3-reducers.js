import { createReducer } from "@reduxjs/toolkit";
import { changeTestData } from "./block3-actions";

export const block3 = createReducer([{ id: 1, radio: null }], {
  [changeTestData.type]: (state, { payload }) => [...state.filter((item) => item.id !== payload.id), payload],
});
