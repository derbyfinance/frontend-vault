import { configureStore } from '@reduxjs/toolkit';
import chainsReducer from './chains';

export const store = configureStore({
  reducer: {
    chains: chainsReducer,
  },
});
