import { createSlice } from '@reduxjs/toolkit';
import { defineState } from 'redux-localstore';

const emptyObject = {};
const userInfoState = defineState(emptyObject)('userInfo');

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: userInfoState,
  reducers: {
    addUserInfo(state, { payload }) {
      return payload;
    },
  },
});

export const { addUserInfo } = userInfoSlice.actions;
