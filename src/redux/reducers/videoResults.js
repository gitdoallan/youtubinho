import { createSlice } from '@reduxjs/toolkit';

export const videoResultsSlice = createSlice({
  name: 'videoResults',
  initialState: [],
  reducers: {
    videoResults(state, { payload }) { state.push(payload); },
  },
});

export const { videoResults } = videoResultsSlice.actions;
