import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/Session';

const INITIAL_STATE = { login_details: null, loggedIn: false, error: null };

const sessionReducer = (state = {
  INITIAL_STATE
}, action) => {
  switch (action.type) {
    case "LOGIN_ATTEMPT":
      state = {
        ...state,
        login_details: action.payload,
        loggedIn: false
      };
      break;
    case "LOGIN_SUCCESS":
      state = {
        ...state,
        loggedIn: true,
        error: null,
      };
      break;
    case "LOGIN_FAIL":
      state = {
        ...state,
        loggedIn: false,
        error: action.error
      };
      break;
    default:
      break;
  }
  return state;
};

export default sessionReducer;
