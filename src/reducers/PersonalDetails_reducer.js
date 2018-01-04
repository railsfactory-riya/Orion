import { EMP_DETAILS } from '../actions/User';

const INITIAL_STATE = { single_emp: null };

const personalDetailsReducer = (state = {
  INITIAL_STATE
}, action) => {
  switch (action.type) {
    case "EMP_DETAILS":
      state = {
        ...state,
        single_emp: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default personalDetailsReducer;
