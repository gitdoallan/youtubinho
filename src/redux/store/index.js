import { configureStore } from '@reduxjs/toolkit';
import storeSynchronize from 'redux-localstore';
import { historySlice } from '../reducers/searchHistory';
import { videoResultsSlice } from '../reducers/videoResults';
import { watchLaterSlice } from '../reducers/watchLater';
import { favoritesSlice } from '../reducers/favorites';

const store = configureStore({
  reducer: {
    searchHistory: historySlice.reducer,
    videoResults: videoResultsSlice.reducer,
    watchLater: watchLaterSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export default store;
storeSynchronize(store);
