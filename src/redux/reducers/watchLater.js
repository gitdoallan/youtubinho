import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const watchLaterState = defineState(emptyArray)('watchLater');

export const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState: watchLaterState,
  reducers: {
    addwatchLater(state, { payload }) {
      const filtered = state.filter((item) => item.id !== payload.id);
      return [...filtered, payload];
    },
  },
});

export const { addwatchLater } = watchLaterSlice.actions;
