import { take, put, call, fork } from 'redux-saga/effects'
import api from '../../services/api'
import * as actions from './actions'
import * as promise_actions from '../promises/actions'

const LOGOUT_URL = 'http://18.188.158.71:8000/logout/';

export function* logout() {
  const data = yield call(api.get, LOGOUT_URL);
  yield put(actions.successLogout(data));
  window.location.reload()
}

export function* watchLogoutRequest() {
  while (true) {
    yield take(actions.LOGOUT);
    yield call(logout);
  }
}


export default function* () {
  yield fork(watchLogoutRequest);
}
