
import {
  LIST_APPOINTMENT_FAILURE,
  LIST_APPOINTMENT_REQUEST,
  LIST_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
  LIST_DOCTOR_REQUEST,
  LIST_DOCTOR_SUCCESS,
  LIST_DOCTOR_FAILURE,
  REMOVE_DOCTOR_REQUEST,
  REMOVE_DOCTOR_SUCCESS,
  REMOVE_DOCTOR_FAILURE,
  REMOVE_DOCTOR_FORBIDDEN,
  LIST_PATIENT_REQUEST,
  LIST_PATIENT_SUCCESS,
  LIST_PATIENT_FAILURE,
  PAIEMENT_APPOINTMENT_REQUEST,
  PAIEMENT_APPOINTMENT_SUCCESS,
  PAIEMENT_APPOINTMENT_FAILURE,
} from './types';

const initialState = {
  isLoading: false,
  list: [],
  listDoctor: [],
  doctorDeletedMessage: '',
  listPatient: [],
  step: 0,
  navigation: [],
  data: [],
  headerMessage: '',
  type: '',
  session: '',
  error: '',
  params: {},
  message: '',
  paiement: [],

};

const AppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_APPOINTMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LIST_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    case LIST_APPOINTMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        list: []
      };

    case CREATE_APPOINTMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        navigation: [],
        data: [],
        headerMessage: '',
        error: '',
        message: '',
        type: '',
      };
    case CREATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        navigation: action.payload.data.navigation,
        data: action.payload.data.data,
        headerMessage: action.payload.data.headermessage,
        error: action.payload.error,
        message: action.payload.message,
        params: action.payload.params,
        type: action.payload.data.type,
        session: action.payload.data.session,
      };
    case CREATE_APPOINTMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        navigation: action.payload.data.navigation,
        data: action.payload.data.data,
        headerMessage: action.payload.data.headermessage,
        error: action.payload.error,
        message: action.payload.message,
        params: action.payload.params,
        type: action.payload.data.type,
        session: action.payload.data.session,
      }
    case LIST_DOCTOR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LIST_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listDoctor: action.payload
      };
    case LIST_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        listDoctor: []
      };

    case REMOVE_DOCTOR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        doctorDeletedMessage: action.payload.message
      };
    case REMOVE_DOCTOR_FORBIDDEN:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    case REMOVE_DOCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case LIST_PATIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LIST_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listPatient: action.payload
      };
    case LIST_PATIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        listPatient: []
      };

    case PAIEMENT_APPOINTMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PAIEMENT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        paiement: action.payload
      };
    case PAIEMENT_APPOINTMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        paiement: []
      };

    default:
      return state;
  }
};

export default AppointmentReducer;
