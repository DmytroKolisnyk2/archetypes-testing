import { createReducer } from "@reduxjs/toolkit";
import { changeLang } from "./lang-action";

export const lang = createReducer('ua', {
  [changeLang.type]: (_, { payload }) => payload,
});
