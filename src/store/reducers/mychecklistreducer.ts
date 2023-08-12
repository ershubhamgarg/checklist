import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from './type';
import {saveItemToListHelper} from '../../helpers';

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
    saveItemToList: (state, action) => {
      state.myList = saveItemToListHelper(action.payload, state.myList);
      console.log(action);
    },
  },
});

export const {addNewList, saveItemToList} = myChecklistSlice.actions;

export const myChecklistReducer = myChecklistSlice.reducer;
