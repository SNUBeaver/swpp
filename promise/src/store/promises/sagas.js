import { take, put, call, fork, select} from 'redux-saga/effects'
import api from '../../services/api'
import * as actions from './actions'

const url = 'http://18.188.158.71:8000/promises/';

export const getUser = (state) => state.user;

export function* getPromiseList() {
  try {
    // console.log("get promise list")
    const user = yield select(getUser);
    const hash = new Buffer(`${user.username}:${user.password}`).toString('base64');
    const data = yield call(api.get, url, {headers:{'Authorization':`Basic ${hash}`}});
    // console.log(data)
    yield put(actions.listPromise(data));
  }
  catch(error) {
    alert(error);
    yield put(actions.listPromise());
  }
}

export function* postPromise(sinceWhen, tilWhen, user2) {
  try {
    // console.log("")
    const user = yield select(getUser);
    const hash = new Buffer(`${user.username}:${user.password}`).toString('base64');
    console.log(user2);
    yield call(api.post, url, {sinceWhen: sinceWhen, tilWhen: tilWhen, user2: user2}, {headers:{'Authorization':`Basic ${hash}`, 'Accept': 'application/json', 'Content-Type': 'application/json'}});
    yield call(getPromiseList)
  }
  catch(error) {
    alert(error);
    yield put(actions.listPromise());
  }
}

export function* watchGetPromiseListRequest() {
  // console.log("watch get promise")
  while (true) {

    yield take(actions.LISTPROMISE);
    yield call(getPromiseList)
  }
}

export function* watchPostPromiseRequest() {
  while (true) {
    const {sinceWhen, tilWhen, user2} = yield take(actions.POST_PROMISE_REQUEST);
    yield call(postPromise, sinceWhen, tilWhen, user2)
  }
}


export default function* () {
  yield fork(watchGetPromiseListRequest);
  yield fork(watchPostPromiseRequest);
}
