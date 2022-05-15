import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const searchHistoryState = defineState(emptyArray)('searchHistory');

export const historySlice = createSlice({
  name: 'searchHistory',
  initialState: searchHistoryState,
  reducers: {
    addSearchHistory(state, { payload }) { state.push(payload); },
  },
});

export const { addSearchHistory } = historySlice.actions;

export const videoResultsSlice = createSlice({
  name: 'videoResults',
  initialState: [],
  reducers: {
    videoResults(state, { payload }) { state.push(payload); },
  },
});

export const { videoResults } = videoResultsSlice.actions;
