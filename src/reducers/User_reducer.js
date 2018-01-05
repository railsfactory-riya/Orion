import { USER_DETAILS, OTHER_DETAILS, ALL_EMP } from '../actions/User';

const INITIAL_STATE = { personal_details: null, other_details: null };

const userDetailsReducer = (state = {
  INITIAL_STATE
}, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      state = {
        ...state,
        personal_details: action.payload
      };
      break;
    case "OTHER_DETAILS":
      state = {
        ...state,
        other_details: action.payload
      };
      break;
    case "ALL_EMP":
      state = {
        ...state,
        all_emp: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default userDetailsReducer;
