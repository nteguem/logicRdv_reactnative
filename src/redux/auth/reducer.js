import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  STEP_REQUEST,
  LOGIN_REQUEST
} from './types';

const initialState = {
  isLoggedIn: false,
  isLoading:false,
  step: 0,
  session: '',
  data:'',
  action:'',
  headerMessage: '',
  headerError:'',
  inputFields: [],
  buttons: [],
  token: '',
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
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
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
    default:
      return state;
  }
};

export default AuthReducer;
