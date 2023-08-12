import {combineReducers} from '@reduxjs/toolkit';
import {myChecklistReducer} from './mychecklistreducer';

export const appReducer = combineReducers({
  mychecklistreducer: myChecklistReducer,
});
