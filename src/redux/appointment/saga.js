
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import { getUserData } from "../../utils/helpers";
import { setModalVisible } from '../app/actions';
import { loginRequest } from '../auth/actions';
import { createAppointmentRequest } from './actions';
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
  REMOVE_DOCTOR_REQUEST,
  REMOVE_DOCTOR_SUCCESS,
  REMOVE_DOCTOR_FORBIDDEN,
  REMOVE_DOCTOR_FAILURE,
  PAIEMENT_APPOINTMENT_REQUEST,
  PAIEMENT_APPOINTMENT_SUCCESS,
  PAIEMENT_APPOINTMENT_FAILURE,
  LIST_PATIENT_SUCCESS,
  LIST_PATIENT_FAILURE,
  LIST_PATIENT_REQUEST,
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

function* deleteDoctor({ payload }) {
  try {
    const endpoint = 'account/doctorremove/';
    const userData = yield getUserData();
    const body = { "tokenuser": userData.tokenuser, "id": payload.id.id }
    const response = yield call(sendRequest, 'POST', endpoint, body);
    console.log(response);
    if (response.httpstatut == 200) {
      yield put({ type: REMOVE_DOCTOR_SUCCESS, payload: { message: response.message } });
      showMessage({
        message: 'Suppression réussie',
        description: response.message,
        type: 'info',
        duration: 3500,
      });
      // yield listDoctor(response.data.activeEtabs);
    }
  } catch (error) {
    console.error('error', error);
    if (error.response && error.response.httpstatut === 403) {
      yield put({ type: REMOVE_DOCTOR_FORBIDDEN, payload: { message: response.message } });
    } else {
      yield put({ type: REMOVE_DOCTOR_FAILURE, payload: error.message });
    }
  }
}

function* addDoctor(id, phone, tokenuser) {
  try {
    const { session, params, data } = yield select(state => state.AppointmentReducer);
    const endpoint = 'account/doctoradd/';
    const body = { "id": id, "phone": phone, "tokenuser": tokenuser };
    const response = yield call(sendRequest, 'POST', endpoint, body);
    if (response.httpstatut == 200) {
      yield put(createAppointmentRequest(params.tokenappointment, data[0].onclick_week, data[0].onclick_data, data[0].onclick_action, session));
    }
    else {
      yield RootNavigation.navigate('Mes rendez-vous');
      yield put(setModalVisible(true, "Impossible d'ajouter le cabinet médical. Veuillez réessayer plus tard."));
    }
  } catch (error) {
    console.error('error', error);
    yield RootNavigation.navigate('Mes rendez-vous');
    yield put(setModalVisible(true, "Impossible d'ajouter le cabinet médical. Veuillez réessayer plus tard."));
  }
}


function* listPatient({ payload }) {
  try {
    const endpoint = 'patients/list/';
    const { tokenappt } = payload;
    const userData = yield getUserData();
    const body = { "tokenuser": userData.tokenuser, "tokenappt": tokenappt }
    const response = yield call(sendRequest, 'POST', endpoint, body);
    yield put({ type: LIST_PATIENT_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('error', error);
    yield put({ type: LIST_PATIENT_FAILURE, payload: error });
  }
}

function* create({ payload }) {
  try {
    const endpoint = 'appointment/create/';
    const userData = yield getUserData();
    const { optionalParam, ...restPayload } = payload;
    const body = { "tokenuser": userData?.tokenuser, ...restPayload }
    const response = yield call(sendRequest, 'POST', endpoint, body);
    yield put({ type: CREATE_APPOINTMENT_SUCCESS, payload: response });
    console.log("response  :", response)

    switch (response.data.type) {
      case "appttype":
        yield RootNavigation.navigate('Motif du Rendez-vous', { tokenappointment: response.params.tokenappointment });
        break;

      case "apptcreneaux":
       yield RootNavigation.navigate('Jour et Heure du Rdv', { tokenappointment: response.params.tokenappointment, title: payload.optionalParam });
        break;

      case "apptnothing":
        yield put(setModalVisible(false, ""));
        yield put(setModalVisible(true, response.data.headermessage));
        break;

      case "apptpatients":
        yield RootNavigation.navigate('Liste des patients', { tokenappointment: response.params.tokenappointment });
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
        yield put(setModalVisible(false, ""));
        yield put(setModalVisible(true, response.data.headermessage));
        break;

      case "apptconfirm":
        console.log("appconfirm::",response.data.data.payment)
        yield RootNavigation.navigate('Valider le Rendez-vous', { tokenappointment: response.params.tokenappointment });
        showMessage({
          message: 'Validation du rendez-vous',
          description: response.data.headermessage,
          type: 'info',
          duration: 3500,
        });
        break;

      case "apptvalided":
        yield RootNavigation.navigate('Confirmation rdv', { tokenappointment: response.params.tokenappointment });
        break;
      case "apptdoctoradd":
        const session = response.data.session;
        const JsonSession = JSON.parse(session.replace(/\\"/g, '"'));
        yield put(setModalVisible(true, response.data.headermessage.replace(/\./g, " ") + JsonSession.rdvworkername.replace(/<br>/gi, "")));
        yield addDoctor(response.data.data[0].id, response.data.data[0].phone, userData?.tokenuser);
        break;
      case "apptstripeandautovalide":
        console.log("apptstripeandautovalide")
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
  yield takeLatest(REMOVE_DOCTOR_REQUEST, deleteDoctor);
  yield takeLatest(LIST_PATIENT_REQUEST, listPatient);
  yield takeLatest(CREATE_APPOINTMENT_REQUEST, create);
  yield takeLatest(PAIEMENT_APPOINTMENT_REQUEST, paiementAppt);
}

export default AppointmentSaga;
