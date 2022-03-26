import { createReducer } from "@reduxjs/toolkit";
import { changeTestData, clearBlock2 } from "./block2-actions";

export const block2 = createReducer([{ id: 1, radio: null }], {
  [changeTestData.type]: (state, { payload }) => [...state.filter((item) => item.id !== payload.id), payload],
  [clearBlock2.type]: () => [{ id: 1, radio: null }],
});
