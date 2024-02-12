import { combineReducers } from 'redux';
import AuthReducer from '../auth/reducer';
import CountryReducer from "../country/reducer";

const reducerCombination = combineReducers({
  AuthReducer,CountryReducer
});

export default reducerCombination;
