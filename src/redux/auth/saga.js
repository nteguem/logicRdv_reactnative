// src/auth/authSaga.js
import { takeLatest, put } from 'redux-saga/effects';
import * as types from './types';
import { loginSuccess, logoutSuccess } from './authActions';

function* loginSaga(action) {
  try {
    // Code pour la saga de connexion
    yield put(loginSuccess(action.payload));
  } catch (error) {
    // Gérer les erreurs de connexion
  }
}

function* logoutSaga() {
  try {
    // Code pour la saga de déconnexion
    yield put(logoutSuccess());
  } catch (error) {
    // Gérer les erreurs de déconnexion
  }
}

export default function* authSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.LOGOUT, logoutSaga);
}
