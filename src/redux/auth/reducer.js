import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  STEP_REQUEST,
} from './types';

const initialState = {
  isLoggedIn: false,
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
      };
    default:
      return state;
  }
};

export default AuthReducer;
