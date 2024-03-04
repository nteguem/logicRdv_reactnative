import { combineReducers } from 'redux';
import AuthReducer from '../auth/reducer';
import SearchReducer from '../search/reducer';

const reducerCombination = combineReducers({
  AuthReducer,SearchReducer
});

export default reducerCombination;
