import {combineReducers} from '@reduxjs/toolkit';
import {MyChecklistReducer} from './mychecklistreducer';

export const appReducer = combineReducers({
  mychecklistreducer: MyChecklistReducer,
});
