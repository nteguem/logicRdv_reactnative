import {types} from './types';

const initialState = {
  countries: [],
  countryDetails: null,
  loadingCountries: false,
  loadingCountryDetails: false,
  countriesError: null,
  countryDetailsError: null,
};

const CountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COUNTRIES_REQUEST:
      return {
        ...state,
        loadingCountries: true,
        countriesError: null,
      };
    case types.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        loadingCountries: false,
      };
    case types.GET_COUNTRIES_FAILURE:
      return {
        ...state,
        loadingCountries: false,
        countriesError: action.payload,
      };
    case types.GET_COUNTRY_DETAILS_REQUEST:
      return {
        ...state,
        loadingCountryDetails: true,
        countryDetailsError: null,
      };
    case types.GET_COUNTRY_DETAILS_SUCCESS:
      return {
        ...state,
        countryDetails: action.payload,
        loadingCountryDetails: false,
      };
    case types.GET_COUNTRY_DETAILS_FAILURE:
      return {
        ...state,
        loadingCountryDetails: false,
        countryDetailsError: action.payload,
      };
    default:
      return state;
  }
};

export default (CountryReducer);
