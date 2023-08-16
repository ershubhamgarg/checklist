import {put, takeEvery} from 'redux-saga/effects';
import PDListJson from './../json/PDList.json';
import {
  onGetPDListRequest,
  onGetPDListSuccess,
} from '../store/reducers/mychecklistreducer';

export function* getPDList() {
  yield put(onGetPDListSuccess(PDListJson));
}

export function* myChecklistSaga() {
  yield takeEvery(onGetPDListRequest, getPDList);
}
