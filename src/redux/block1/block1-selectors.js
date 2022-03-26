import { createSelector } from "@reduxjs/toolkit";

export const getBlock1 = (state) => state.block1;

export const getBlock1Completed = createSelector([getBlock1], (block) =>
  !Boolean(block.find((item) => item.radio === null))
)

export const getBlock1Started = createSelector([getBlock1], (block) =>
  Boolean(block.find((item) => item.radio))
)