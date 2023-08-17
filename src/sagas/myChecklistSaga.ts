import {put, takeEvery, delay} from 'redux-saga/effects';
import PDListJson from './../json/PDList.json';
import {
  onGetPDListRequest,
  onGetPDListSuccess,
} from '../store/reducers/mychecklistreducer';

function* getPDList() {
  yield delay(5000); // response will come after 5 secs
  yield put(onGetPDListSuccess(PDListJson));
}

export function* myChecklistSaga() {
  yield takeEvery(onGetPDListRequest, getPDList);
}
