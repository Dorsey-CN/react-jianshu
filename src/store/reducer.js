import { combineReducers } from 'redux-immutable';
import HeaderReducer from '../common/header/store/reducer';

const reducer = combineReducers({
  header: HeaderReducer
});

export default reducer;
