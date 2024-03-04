import { combineReducers } from 'redux';
import AuthReducer from '../auth/reducer';
import SearchReducer from '../search/reducer';
import CountryReducer from "../country/reducer";

const reducerCombination = combineReducers({
  AuthReducer,SearchReducer,CountryReducer
});

export default reducerCombination;
