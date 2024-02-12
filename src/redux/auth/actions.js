import * as types from './types';

export const login = (credentials) => ({
  type: types.LOGIN,
  payload: credentials,
});

export const register = (userData) => ({
  type: types.REGISTER,
  payload: userData,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
