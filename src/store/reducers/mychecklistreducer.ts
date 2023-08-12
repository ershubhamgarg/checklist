import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from './type';

const initialState: InitialState = {
  myList: [],
  loading: false,
};

const myChecklistSlice = createSlice({
  initialState,
  name: 'MyChecklistReducer',
  reducers: {
    addNewList: (state, action) => {
      state.myList.push(action.payload);
    },
  },
});

export const {addNewList} = myChecklistSlice.actions;

export const MyChecklistReducer = myChecklistSlice.reducer;
