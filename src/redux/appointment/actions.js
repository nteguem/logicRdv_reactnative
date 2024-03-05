import * as types from './types';

export const listAppointmentsRequest = (data) => ({
  type: types.LIST_APPOINTMENT_REQUEST,
  payload: {data},
});
