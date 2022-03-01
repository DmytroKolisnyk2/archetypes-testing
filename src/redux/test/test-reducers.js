import { createReducer } from "@reduxjs/toolkit";
import { changeTest } from "./test-actions";

export const test = createReducer("", {
  [changeTest.type]: (_, payload) => payload,
});
