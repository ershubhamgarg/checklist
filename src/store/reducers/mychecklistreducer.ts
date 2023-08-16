import {createSlice, current} from '@reduxjs/toolkit';
import {InitialState} from './type';
import {
  checkUncheckItemHelper,
  deleteItemFromListHelper,
  deleteListHelper,
  saveItemToListHelper,
} from '../../helpers';

const initialState: InitialState = {
  myList: [],
  loading: false,
};

const myChecklistSlice = createSlice({
  initialState,
  name: 'myChecklistReducer',
  reducers: {
    addNewList: (state, action) => {
      state.myList.push(action.payload);
    },
    deleteList: (state, action) => {
      let currentState = current(state);
      state.myList = deleteListHelper(action.payload, currentState.myList);
    },
    saveItemToList: (state, action) => {
      state.myList = saveItemToListHelper(action.payload, state.myList);
    },
    deleteItemFromList: (state, action) => {
      let currentState = current(state);
      state.myList = deleteItemFromListHelper(
        action.payload,
        currentState.myList,
      );
    },
    doneItemFromList: (state, action) => {
      let currentState = current(state);
      state.myList = checkUncheckItemHelper(
        action.payload,
        currentState.myList,
      );
    },
  },
});

export const {
  addNewList,
  saveItemToList,
  deleteItemFromList,
  doneItemFromList,
  deleteList,
} = myChecklistSlice.actions;

export const myChecklistReducer = myChecklistSlice.reducer;
