import * as types from './types';

export const listAppointmentsRequest = (data) => ({
  type: types.LIST_APPOINTMENT_REQUEST,
  payload: {data},
});

export const createAppointmentRequest = (tokenappointment, week, data, action, session, optionalParam = null) => ({
  type: types.CREATE_APPOINTMENT_REQUEST,
  payload: { tokenappointment, week, data, action, session, optionalParam },
});

export const listDoctorRequest = (data) => ({
  type: types.LIST_DOCTOR_REQUEST,
  payload: { data },
});

export const listPatientRequest = (tokenappt) => ({
  type: types.LIST_PATIENT_REQUEST,
  payload: { tokenappt },
});

export const paiementApptRequest = (tokentelecons) => ({
  type: types.PAIEMENT_APPOINTMENT_REQUEST,
  payload: { tokentelecons },
});
