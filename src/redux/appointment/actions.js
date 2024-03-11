import * as types from './types';

export const listAppointmentsRequest = (data) => ({
  type: types.LIST_APPOINTMENT_REQUEST,
  payload: {data},
});

export const createAppointmentRequest = (tokenuser, tokenappointment, week, data, action, session) => ({
  type: types.CREATE_APPOINTMENT_REQUEST,
  payload: { tokenuser, tokenappointment, week, data, action, session },
});
