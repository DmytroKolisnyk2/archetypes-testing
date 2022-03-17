import { createReducer } from "@reduxjs/toolkit";
import { changeTestData } from "./block1-actions";

export const block1 = createReducer([{ id: 1, radio: null }], {
  [changeTestData.type]: (state, { payload }) => [...state.filter((item) => item.id !== payload.id), payload],
});
