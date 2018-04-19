import React from 'react'
import { take, put, call, fork } from 'redux-saga/effects'
import api from '../../services/api'
import {successUser, listUser} from './actions'
import * as auth_actions from '../auth/actions'
import * as promise_actions from '../promises/actions'

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
const LOGIN_URL = 'http://18.188.158.71:8000/login/';
const USER_URL = 'http://18.188.158.71:8000/users/';

// fetch(proxyurl+LOGIN_URL)
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + LOGIN_URL + " response. Blocked by browser?"))
// curl -i -X OPTIONS -H "Origin: http://127.0.0.1:3000" \
//     -H 'Access-Control-Request-Method: POST' \
//     -H 'Access-Control-Request-Headers: Content-Type, Authorization' \
//     "http://localhost:8000/login/"

export function* getUsers(){
  const data = yield call(api.get, USER_URL );
  console.log(data);
  yield put(listUser(data));
}
export function* watchUsersRequest() {
  while (true) {
    yield take(getUsers);
    // console.log("get userrrrrr")

    yield call(getUsers)
  }
}



export function* login(username, password) {
  try {
    // console.log("username password2", username, password)
    const data = yield call(api.post, LOGIN_URL, {username: username, password: password});
    // console.log("test1")
    yield put(successUser(data, {username: username, password: password}));
    // console.log("test2")

    yield put(promise_actions.listPromise(data));
    // console.log("test3")

  }
  catch(error) {
    // console.log("login failed from user/saga");
    alert(error);
    yield put(auth_actions.failLogin("error"));
  }
}

export function* watchLoginRequest() {
  while (true) {
    const {username, password} = yield take(auth_actions.LOGIN);
    // console.log("saga username, password", username, password)

    yield call(login, username, password)
  }
}

export default function* () {
  yield fork(watchLoginRequest);
  yield fork(watchUsersRequest);
}
