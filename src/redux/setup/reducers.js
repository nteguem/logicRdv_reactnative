import { combineReducers } from 'redux';
import AuthReducer from '../auth/reducer';
import SearchReducer from '../search/reducer';
import AppointmentReducer from '../appointment/reducer';
import NotificationReducer from '../notification/reducer';
const reducerCombination = combineReducers({
  AuthReducer,SearchReducer,AppointmentReducer,NotificationReducer
});

export default reducerCombination;
