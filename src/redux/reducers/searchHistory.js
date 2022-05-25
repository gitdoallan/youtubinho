import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const searchHistoryState = defineState(emptyArray)('searchHistory');

export const historySlice = createSlice({
  name: 'searchHistory',
  initialState: searchHistoryState,
  reducers: {
    addSearchHistory(state, { payload }) {
      const filtered = state.filter((item) => item !== payload);
      return [...filtered, payload];
    },
  },
});

export const { addSearchHistory } = historySlice.actions;
