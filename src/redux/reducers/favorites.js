import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyArray = [];
const favoritesState = defineState(emptyArray)('favorites');

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesState,
  reducers: {
    addFavorites(state, { payload }) {
      state.push(payload);
    },
    removeFavorites(state, { payload }) {
      const filtered = state.filter((item) => item.id !== payload.id);
      return [...filtered];
    },
  },
});

export const { favorites } = favoritesSlice.actions;
