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
    getMyListRequest: state => {
      state.loading = true;
    },
    getMyListSuccess: (state, action) => {
      state.myList = state.myList.concat(action.payload);
      state.loading = false;
    },
    clearMyList: state => {
      state.myList = initialState.myList;
    },
  },
});

export const {getMyListRequest, getMyListSuccess, clearMyList} =
  myChecklistSlice.actions;

export const MyChecklistReducer = myChecklistSlice.reducer;
