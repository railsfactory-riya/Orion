import { combineReducers } from 'redux';
import PersonalDetails from './PersonalDetails_reducer';

const rootReducer = combineReducers({
  PersonalDetails: PersonalDetails
});

export default rootReducer;
