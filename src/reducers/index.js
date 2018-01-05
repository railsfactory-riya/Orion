import { combineReducers } from 'redux';
import userDetails from './User_reducer';

const rootReducer = combineReducers({
  userDetails: userDetails
});

export default rootReducer;
