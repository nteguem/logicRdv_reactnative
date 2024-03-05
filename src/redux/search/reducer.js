import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  RESULT_REQUEST,
  RESULT_SUCCESS,
  RESULT_FAILURE,
  INFO_DOCTOR_REQUEST,
  INFO_DOCTOR_SUCCESS,
  INFO_DOCTOR_FAILURE
} from './types';

const initialState = {
  isLoading: false,
  results:[],
  error:null,
  doctorInfos:null
  
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        results:action.payload.list,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        results:[],
        error:action.payload
      };
      case RESULT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case RESULT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          results:action.payload.list,
        };
      case RESULT_FAILURE:
        return {
          ...state,
          isLoading: false,
          results:[],
          error:action.payload
        };
        case INFO_DOCTOR_REQUEST:
          return {
            ...state,
            isLoading: true,
          };
        case INFO_DOCTOR_SUCCESS:
          return {
            ...state,
            isLoading: false,
            doctorInfos:action.payload,
          };
        case INFO_DOCTOR_FAILURE:
          return {
            ...state,
            isLoading: false,
            doctorInfos:null,
            error:action.payload
          };
    default:
      return state;
  }
};

export default SearchReducer;
