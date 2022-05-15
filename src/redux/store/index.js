import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import { historySlice, videoResultsSlice } from '../reducers';

const store = configureStore({
  reducer: {
    searchHistory: historySlice.reducer,
    videoResults: videoResultsSlice.reducer,
  },
});

export default store;
storeSynchronize(store);
