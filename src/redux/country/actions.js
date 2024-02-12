import {types} from './types';

export const getCountries = () => ({
  type: types.GET_COUNTRIES_REQUEST,
});

export const getCountryDetails = countries => ({
  type: types.GET_COUNTRY_DETAILS_REQUEST,
  payload: countries,
});
