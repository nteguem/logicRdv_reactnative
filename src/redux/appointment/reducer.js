import {
  LIST_APPOINTMENT_FAILURE,
  LIST_APPOINTMENT_REQUEST,
  LIST_APPOINTMENT_SUCCESS,
} from './types';

const initialState = {
  isLoading: false,
  list: [],
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
        list:action.payload
      };
    case LIST_APPOINTMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        list:[]
      };
    default:
      return state;
  }
};

export default AppointmentReducer;
