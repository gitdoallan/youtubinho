import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import { historySlice } from '../reducers/searchHistory';
import { videoResultsSlice } from '../reducers/videoResults';

const store = configureStore({
  reducer: {
    searchHistory: historySlice.reducer,
    videoResults: videoResultsSlice.reducer,
  },
});

export default store;
storeSynchronize(store);
