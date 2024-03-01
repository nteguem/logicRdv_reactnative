import { takeLatest, call, put,select } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  STEP_REQUEST,
} from './types';

function* login(action) {
  try {
    console.log("actionn saga",action)
    const response = yield call(sendRequest, 'POST', 'login/process/', action.payload);
    console.log("response login",response.data)
    // if (response.data && response.data.data.user) {
    //   yield put({ type: LOGIN_SUCCESS, payload: { token: response.data.user.tokenuser } });
    // } else {
    //   yield put({ type: LOGIN_FAILURE });
    // }
    yield put({ type: STEP_REQUEST, payload: response.data});
  } catch (error) {
    yield put({ type: LOGIN_FAILURE });
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default authSaga;
