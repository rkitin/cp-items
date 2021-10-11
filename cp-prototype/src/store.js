import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from 'cp-items';
import screenFoucs from './redux/reducers';

export const store = configureStore({
  reducer: {
    item: itemReducer,
    screenFoucs: screenFoucs
  },
});
