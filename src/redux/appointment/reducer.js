
import {
  LIST_APPOINTMENT_FAILURE,
  LIST_APPOINTMENT_REQUEST,
  LIST_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
  STEP_REQUEST
} from './types';

const initialState = {
  isLoading: false,
  list: [],
  step: 0,
  navigation: [],
  motifRendezVous: [],
  dataCreneaux: [],
  appointmentValidation: [],
  appointmentValided: [],
  headerMessage: '',
  type: '',
  session: ''
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
      };
    case CREATE_APPOINTMENT_SUCCESS:
      if (action.payload.type === 'appttype') {
        return {
          ...state,
          isLoading: false,
          motifRendezVous: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      } else if (action.payload.type === 'apptcreneaux') {
        return {
          ...state,
          isLoading: false,
          navigation: action.payload.navigation,
          dataCreneaux: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      } else if (action.payload.type === 'apptconfirm') {
        return {
          ...state,
          isLoading: false,
          appointmentValidation: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      } else if (action.payload.type === 'apptvalided') {
        return {
          ...state,
          isLoading: false,
          navigation: action.payload.navigation,
          appointmentValided: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      };
    case CREATE_APPOINTMENT_FAILURE:
      if (action.payload.type === 'appttype') {
        return {
          ...state,
          isLoading: false,
          navigation: action.payload.navigation,
          motifRendezVous: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      } else if (action.payload.type === 'apptcreneaux') {
        return {
          ...state,
          isLoading: false,
          navigation: action.payload.navigation,
          dataCreneaux: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      } else if (action.payload.type === 'apptconfirm') {
        return {
          ...state,
          isLoading: false,
          navigation: action.payload.navigation,
          appointmentValidation: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      } else if (action.payload.type === 'apptvalided') {
        return {
          ...state,
          isLoading: false,
          navigation: action.payload.navigation,
          appointmentValided: action.payload.data,
          headerMessage: action.payload.headermessage,
        };
      }
    case STEP_REQUEST:
      return {
        ...state,
        session: action.payload.session,
        headerMessage: action.payload.headermessage,
        type: action.payload.type,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default AppointmentReducer;
