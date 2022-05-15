/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'searchHistory',
  initialState: [],
  reducers: {
    addSearchHistory(state, { payload }) {
      state.push(payload);
    },
  },
});

export const { addSearchHistory } = historySlice.actions;

export default historySlice.reducer;
