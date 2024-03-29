
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import { getUserData } from "../../utils/helpers";
import {setModalVisible} from '../app/actions';
import { loginRequest } from '../auth/actions';
import { showMessage } from 'react-native-flash-message';
import {
  LIST_APPOINTMENT_FAILURE,
  LIST_APPOINTMENT_REQUEST,
  LIST_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
  LIST_DOCTOR_REQUEST,
  LIST_DOCTOR_SUCCESS,
  LIST_DOCTOR_FAILURE,
  PAIEMENT_APPOINTMENT_REQUEST,
  PAIEMENT_APPOINTMENT_SUCCESS,
  PAIEMENT_APPOINTMENT_FAILURE,
} from './types';
import * as RootNavigation from '../../routes/RootNavigation';

function* list({ payload }) {
  try {
    const endpoint = 'account/appointments/';
    const userData = yield getUserData();
    const body = { "tokenuser": userData.tokenuser, "page": payload.data.id }
    const response = yield call(sendRequest, 'POST', endpoint, body);
    yield put({ type: LIST_APPOINTMENT_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('error', error);
    yield put({ type: LIST_APPOINTMENT_FAILURE, payload: error });
  }
}

function* listDoctor({ payload }) {
  try {
    const endpoint = 'account/doctors/';
    const userData = yield getUserData();
    const body = { "tokenuser": userData.tokenuser }
    const response = yield call(sendRequest, 'POST', endpoint, body);
    yield put({ type: LIST_DOCTOR_SUCCESS, payload: response.data.activeEtabs });
  } catch (error) {
    console.error('error', error);
    yield put({ type: LIST_DOCTOR_FAILURE, payload: error });
  }
}

function* create({ payload }) {
  try {
    const endpoint = 'appointment/create/';
    const userData = yield getUserData();
    const { optionalParam, ...restPayload } = payload;
    const body = { "tokenuser": userData?.tokenuser, ...restPayload }
    console.log("body", body)
    const response = yield call(sendRequest, 'POST', endpoint, body);
    yield put({ type: CREATE_APPOINTMENT_SUCCESS, payload: response });
    console.log("response  :", response)

    switch (response.data.type) {
      case "appttype":
        RootNavigation.navigate('Motif du Rendez-vous', { tokenappointment: response.params.tokenappointment });
        break;

      case "apptcreneaux":
        RootNavigation.navigate('Jour et Heure du Rdv', { tokenappointment: response.params.tokenappointment, title: payload.optionalParam });
        break;

      case "apptnothing":
        yield put(setModalVisible(true, response.data.headermessage));
        break;

      case "apptpatients":
        console.log("apptpatients");
        break;

      case "apptconnect":
        yield RootNavigation.navigate('Se connecter', { type: response.data.type });
        showMessage({
          message: 'Se connecter',
          description: response.data.headermessage,
          type: 'info',
          duration: 3500,
        });
        break;

      case "apptlocked":
        yield put(setModalVisible(true, response.data.headermessage));
        break;

      case "apptconfirm":
        console.log("apptconfirm");
        break;

      default:
        break;
    }

  } catch (error) {
    console.log("error:", error)
    yield put({ type: CREATE_APPOINTMENT_FAILURE, payload: error });
  }
}

function* paiementAppt({ payload }) {
  try {
    const endpoint = 'teleconsultation/get/';
    const response = yield call(sendRequest, 'POST', endpoint, payload);
    yield put({ type: PAIEMENT_APPOINTMENT_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('error', error);
    yield put({ type: PAIEMENT_APPOINTMENT_FAILURE, payload: error });
  }
}

function* AppointmentSaga() {
  yield takeLatest(LIST_APPOINTMENT_REQUEST, list);
  yield takeLatest(LIST_DOCTOR_REQUEST, listDoctor);
  yield takeLatest(CREATE_APPOINTMENT_REQUEST, create);
  yield takeLatest(PAIEMENT_APPOINTMENT_REQUEST, paiementAppt);
}

export default AppointmentSaga;
