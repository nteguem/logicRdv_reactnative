import { takeLatest, call, put, select } from 'redux-saga/effects';
import { sendRequest } from '../../utils/api';
import {getUserData} from "../../utils/helpers"
import {
  LIST_APPOINTMENT_FAILURE,
  LIST_APPOINTMENT_REQUEST,
  LIST_APPOINTMENT_SUCCESS
} from './types';


function* list({ payload }) {
  try {
    const endpoint = 'account/appointments/';
    const userData = yield getUserData();
    const body = {"tokenuser":userData.tokenuser,"page":payload.data.id}
    const response = yield call(sendRequest, 'POST', endpoint, body);
    console.log("response appointment",response)
    yield put({ type: LIST_APPOINTMENT_SUCCESS, payload: response.data.list });
  } catch (error) {
    console.error('error', error);
    yield put({ type: LIST_APPOINTMENT_FAILURE, payload: error });
  }
}


function* AppointmentSaga() {
  yield takeLatest(LIST_APPOINTMENT_REQUEST, list);
}

export default AppointmentSaga;
