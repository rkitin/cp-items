import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from 'cp-items';

export const store = configureStore({
  reducer: {
    item: itemReducer
  },
});
