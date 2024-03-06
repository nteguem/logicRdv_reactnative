import { combineReducers } from 'redux';
import AuthReducer from '../auth/reducer';
import SearchReducer from '../search/reducer';
import AppointmentReducer from '../appointment/reducer';
const reducerCombination = combineReducers({
  AuthReducer,SearchReducer,AppointmentReducer
});

export default reducerCombination;
