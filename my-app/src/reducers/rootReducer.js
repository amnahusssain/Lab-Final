// src/reducers/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import dragonsReducer from './dragonsSlice';
import missionsReducer from './missionsSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  dragons: dragonsReducer,
  missions: missionsReducer,
  user: userReducer,
  // Add other reducers as needed
});

export default rootReducer;
