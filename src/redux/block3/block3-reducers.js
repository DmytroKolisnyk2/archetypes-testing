import { createReducer } from "@reduxjs/toolkit";
import { changeTestData, clearBlock3 } from "./block3-actions";

export const block3 = createReducer([{ id: 1, radio: null }], {
  [changeTestData.type]: (state, { payload }) => [...state.filter((item) => item.id !== payload.id), payload],
  [clearBlock3.type]: () => [{ id: 1, radio: null }],
});
