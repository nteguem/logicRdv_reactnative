import * as types from './types';

export const loginRequest = (data, action, session) => ({
  type: types.LOGIN_REQUEST,
  payload: { data, action, session },
});

export const loginSuccess = (response) => ({
  type: types.LOGIN_SUCCESS,
  payload: response,
});

export const stepRequest = (data, action, session) => ({
  type: types.STEP_REQUEST,
  payload: { data, action, session },
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});