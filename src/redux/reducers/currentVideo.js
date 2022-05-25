import { createSlice } from '@reduxjs/toolkit';

export const currentVideoSlice = createSlice({
  name: 'currentVideo',
  initialState: '',
  reducers: {
    setCurrentVideo(state, { payload }) { return payload; },
  },
});

export const { setCurrentVideo } = currentVideoSlice.actions;
