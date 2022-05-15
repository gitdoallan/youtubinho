import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from '../reducer';

const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});

export default store;
