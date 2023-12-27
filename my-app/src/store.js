// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './reducers/dragonsSlice';
import missionsReducer from './reducers/missionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionsReducer,
    // Add other reducers as needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* Add middleware if needed */),
});

export default store;
