import * as types from './types';

export const loginRequest = (data, action, session) => ({
  type: types.LOGIN_REQUEST,
  payload: { data, action, session },
});

export const signUpRequest = (type,data) => ({
  type: types.SIGNUP_REQUEST,
  payload: { type, data },
});

export const setLoggedIn = (isLoggedIn) => ({
  type: types.SET_LOGGED_IN,
  payload: isLoggedIn,
});
