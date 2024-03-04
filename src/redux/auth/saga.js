import { takeLatest, call, put, select } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';
import { sendRequest } from '../../utils/api';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  STEP_REQUEST,
  SIGNUP_CHECK,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST
} from './types';

function* login({payload}) {
  try {
    const response = yield call(sendRequest, 'POST', 'login/process/', payload);
    // if (response.data && response.data.data.user) {
    //   yield put({ type: LOGIN_SUCCESS, payload: { token: response.data.user.tokenuser } });
    // } else {
    //   yield put({ type: LOGIN_FAILURE });
    // }
    yield put({ type: STEP_REQUEST, payload: response.data });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE });
  }
}


function* signup({ payload }) {
  const { type, data } = payload;

  try {
    const endpoint = type === 'check' ? 'inscription/check/' : 'inscription/add/';
    const response = yield call(sendRequest, 'POST', endpoint, data);
    
    if (type === 'check') {
      yield put({ type: SIGNUP_CHECK, payload: response.data });
    } else {
       if ( response.message === "Etablissement ajouté à la liste de vos praticiens")
      yield put({ type: SIGNUP_SUCCESS, payload: response.data });
    }
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, payload: error });
    showMessage({
      message: 'Erreur',
      description: `Erreur : ${error}`,
      type: 'danger',
      duration: 5000,
    });
  }
}


function* AuthSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(SIGNUP_REQUEST, signup);
}

export default AuthSaga;
