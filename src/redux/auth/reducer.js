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
  inputFields: [],
  buttons: [],
  token: '',
};

const authReducer = (state = initialState, action) => {
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
        step: action.payload.session.step,
        session: action.payload.session,
        headerMessage: action.payload.headerMessage,
        inputFields: action.payload.inputFields,
        buttons: action.payload.buttons,
      };
    default:
      return state;
  }
};

export default authReducer;
