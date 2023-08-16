import {createSlice, current} from '@reduxjs/toolkit';
import {InitialState} from './type';
import {deleteItemFromListHelper, saveItemToListHelper} from '../../helpers';

const initialState: InitialState = {
  myList: [],
  loading: false,
};

const myChecklistSlice = createSlice({
  initialState,
  name: 'myChecklistReducer',
  reducers: {
    addNewList: (state, action) => {
      console.log('list while adding : ', state.myList);
      state.myList.push(action.payload);
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
  },
});

export const {addNewList, saveItemToList, deleteItemFromList} =
  myChecklistSlice.actions;

export const myChecklistReducer = myChecklistSlice.reducer;
