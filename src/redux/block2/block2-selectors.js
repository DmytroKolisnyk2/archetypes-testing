import { createSelector } from "@reduxjs/toolkit";

export const getBlock2 = (state) => state.block2

export const getBlock2Completed = createSelector([getBlock2], (block) => {
  console.log(!Boolean(block.find((item) => item.radio === null)));
  return !Boolean(block.find((item) => item.radio === null))
})
