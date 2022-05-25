import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const videoResultsState = defineState(emptyArray)('videoResults');

export const videoResultsSlice = createSlice({
  name: 'videoResults',
  initialState: videoResultsState,
  reducers: {
    videoResults(state, { payload }) { state.push(payload); },
  },
});

export const { videoResults } = videoResultsSlice.actions;
