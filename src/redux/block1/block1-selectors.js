import { createSelector } from "@reduxjs/toolkit";

export const getBlock1 = (state) => state.block1;

export const getBlock1Completed = createSelector([getBlock1], (block) => {
  console.log(!Boolean(block.find((item) => item.radio === null)));
  return !Boolean(block.find((item) => item.radio === null))
})