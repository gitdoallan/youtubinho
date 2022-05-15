import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from '../reducers';

const store = configureStore({
  reducer: {
    searchHistory: youtubeReducer,
  },
});

export default store;
