import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const favoritesState = defineState(emptyArray)('favorites');

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesState,
  reducers: {
    favorites(state, { payload }) {
      const hasVideo = state.some(({ id }) => id === payload.id);
      console.log(hasVideo);
      state.push(payload);
    },
  },
});

export const { favorites } = favoritesSlice.actions;
