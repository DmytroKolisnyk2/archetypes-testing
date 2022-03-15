import { createSelector } from "@reduxjs/toolkit";

export const getBlock3 = (state) => state.block3

export const getBlock3Completed = createSelector([getBlock3], (block) => !Boolean(block.find((item) => item.radio === null)))
