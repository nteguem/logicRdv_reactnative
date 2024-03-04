import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  STEP_REQUEST,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_CHECK,
} from './types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  step: 0,
  session: '',
  failure:'',
  headerMessage: '',
  headerError: '',
  inputFields: [],
  buttons: [],
  token: '',
  cgu: '',
  etablissements: [],
  message:''
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: action.payload.token,
        headerMessage: action.payload.headermessage,
        headerError: action.payload.headererror,
        inputFields: action.payload.input,
        buttons: action.payload.buttonvalidation,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        headerMessage: action.payload.headermessage,
        headerError: action.payload.headererror,
        inputFields: action.payload.input,
        buttons: action.payload.buttonvalidation,
      };
    case STEP_REQUEST:
      return {
        ...state,
        session: action.payload.session,
        headerMessage: action.payload.headermessage,
        headerError: action.payload.headererror,
        inputFields: action.payload.input,
        buttons: action.payload.buttonvalidation,
        isLoading: false,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        session: '',
        failure:'',
        headerMessage: '',
        headerError: '',
        inputFields: [],
        buttons: [],
        token: '',
        cgu: ''
      }
    case SIGNUP_CHECK:
      return {
        ...state,
        isLoading: false,
        cgu: action.payload.cgu,
        etablissements: action.payload.etabs,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
};

export default AuthReducer;
