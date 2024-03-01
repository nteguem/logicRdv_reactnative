import { takeLatest, call, put, select } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  STEP_REQUEST,
} from './types';

function* login(action) {
  try {
    const response = yield call(sendRequest, 'POST', 'login/process/', action.payload);
    console.log("response", response);
    if (response.data && response.data.message === 'Login OK') {
      yield put({ type: LOGIN_SUCCESS, payload: { token: response.data.user.tokenuser } });
    } else {
      yield put({ type: LOGIN_FAILURE });
    }

    yield put({ type: STEP_REQUEST, payload: response.data });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE });
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default authSaga;
