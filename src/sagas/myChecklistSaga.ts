import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getMyListRequest,
  getMyListSuccess,
} from '../store/reducers/mychecklistreducer';

function* onGetMyList(): Generator<any> {
  const list: any = yield call(fetch, 'https://reqres.in/api/users?page=1');
  const listJSON: any = yield list.json();
  yield put(getMyListSuccess(listJSON.data));
}
export function* myChecklistSaga() {
  yield takeEvery(getMyListRequest, onGetMyList);
}
