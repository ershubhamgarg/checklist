import {createSlice, current} from '@reduxjs/toolkit';
// import {InitialState} from './type';
import {
  checkUncheckItemHelper,
  deleteItemFromListHelper,
  deleteListHelper,
  saveItemToListHelper,
  skipItemHelper,
} from '../../helpers';
// import PDListJson from './../../json/PDList.json';
const initialState = {
  pdList: [],
  myList: [],
  loading: false,
  pdListLoading: false,
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
    submitItemFromPDList: (state, action) => {
      let currentState = current(state);
      state.pdList = checkUncheckItemHelper(
        action.payload,
        currentState.pdList,
      );
    },
    skipItemFromPDList: (state, action) => {
      let currentState = current(state);
      state.pdList = checkUncheckItemHelper(
        action.payload,
        currentState.pdList,
      );
    },
    onGetPDListRequest: state => {
      state.pdListLoading = true;
    },
    onGetPDListSuccess: (state, action) => {
      (state.pdListLoading = false), (state.pdList = action.payload);
    },
    doneItemFromPDList: (state, action) => {
      let currentState = current(state);
      state.pdList = checkUncheckItemHelper(
        action.payload,
        currentState.pdList,
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
  doneItemFromPDList,
  onGetPDListRequest,
  onGetPDListSuccess,
  submitItemFromPDList,
  skipItemFromPDList,
} = myChecklistSlice.actions;

export const myChecklistReducer = myChecklistSlice.reducer;
