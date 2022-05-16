import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const watchLaterState = defineState(emptyArray)('watchLater');

export const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState: watchLaterState,
  reducers: {
    addwatchLater(state, { payload }) { state.push(payload); },
  },
});

export const { addwatchLater } = watchLaterSlice.actions;
