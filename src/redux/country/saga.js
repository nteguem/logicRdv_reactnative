import { takeLeading, put, call } from 'redux-saga/effects';
import { types } from './types';
import { sendRequest } from '../../utils/api';

function* getCountriesSaga() {
  try {
    const countries = yield call(sendRequest, 'GET', 'https://restcountries.com/v3.1/all');
    const firstFifteenCountries = countries.slice(0, 2); // Limitez à 2 pays
    yield put({ type: types.GET_COUNTRIES_SUCCESS, payload: firstFifteenCountries });
  } catch (error) {
    yield put({ type: types.GET_COUNTRIES_FAILURE, payload: error });
  }
}

function* getCountryDetailsSaga(action) {
  try {
    const country = yield call(sendRequest, 'GET', `https://restcountries.com/v3.1/alpha/${action.payload}`);
    yield put({ type: types.GET_COUNTRY_DETAILS_SUCCESS, payload: country });
  } catch (error) {
    yield put({ type: types.GET_COUNTRY_DETAILS_FAILURE, payload: error });
  }
}

export default function* CountrySaga() {
  yield takeLeading(types.GET_COUNTRIES_REQUEST, getCountriesSaga);
  yield takeLeading(types.GET_COUNTRY_DETAILS_REQUEST, getCountryDetailsSaga);
}
