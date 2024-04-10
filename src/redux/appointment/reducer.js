
import {
  LIST_APPOINTMENT_FAILURE,
  LIST_APPOINTMENT_REQUEST,
  LIST_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
  CANCEL_APPOINTMENT_REQUEST,
  CANCEL_APPOINTMENT_SUCCESS,
  CANCEL_APPOINTMENT_FAILURE,
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
  ADD_PATIENT_REQUEST,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_FAILURE,
  EDIT_PATIENT_REQUEST,
  EDIT_PATIENT_SUCCESS,
  EDIT_PATIENT_FAILURE,
  PAIEMENT_APPOINTMENT_REQUEST,
  PAIEMENT_APPOINTMENT_SUCCESS,
  PAIEMENT_APPOINTMENT_FAILURE,
  UPDATE_PATIENT_LIST,
  REMOVE_PATIENT_REQUEST,
  REMOVE_PATIENT_SUCCESS,
  REMOVE_PATIENT_FAILURE,
  CLEAR_APPOINTMENT_DATA,
  CLEAR_PATIENT_LIST,
} from './types';

const initialState = {
  isLoading: false,
  list: [],
  listDoctor: [],
  listPatient: [],
  step: 0,
  navigation: [],
  data: [],
  patient: [],
  headerMessage: '',
  type: '',
  session: '',
  doctorDeletedMessage: '',
  apptCanceledMessage: '',
  error: '',
  params: {},
  message: '',
  paiement: [],
  paiementIntent:""

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
        // list: state.list?.list ? [...state.list, ...action.payload] : action.payload
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
        paiementIntent:""
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
        paiementIntent: ('payment_intent' in action.payload.data) ? action.payload.data.payment_intent.stripeClientSecret : "",
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
        paiementIntent:"",
        session: action.payload.data.session,
      }

    case CANCEL_APPOINTMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CANCEL_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apptCanceledMessage: action.payload.message
      };
    case CANCEL_APPOINTMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

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
        doctorDeletedMessage: action.payload.message
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

    case ADD_PATIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        patient: action.payload
      };
    case ADD_PATIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        patient: []
      };

    case EDIT_PATIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        patient: action.payload
      };
    case EDIT_PATIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        patient: []
      };

    case REMOVE_PATIENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_PATIENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        patient: action.payload
      };
    case REMOVE_PATIENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        patient: []
      };

    case UPDATE_PATIENT_LIST:
      return {
        ...state,
        listPatient: action.payload,
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
      case CLEAR_APPOINTMENT_DATA:
      return {
        ...state,
        data: [], 
      };

    case CLEAR_PATIENT_LIST:
      return {
        ...state,
        listPatient: [], 
      };

    default:
      return state;
  }
};

export default AppointmentReducer;
