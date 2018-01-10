import ApiCall from '../ApiCall';

export function empDetails(request) {
  let url = "employees/452?access_token=";
  return (dispatch) => {
   dispatch({type: "USER_DETAILS"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "USER_DETAILS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "USER_DETAILS", payload: error});
    })
  }
}

export function otherDetails(request) {
  let url = "employees/452/skills?access_token=";
  return (dispatch) => {
   dispatch({type: "OTHER_DETAILS"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "OTHER_DETAILS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "OTHER_DETAILS", payload: error});
    })
  }
}

export function allEmp() {
  let url = "150";
  return (dispatch) => {
   dispatch({type: "ALL_EMP"});
   ApiCall.getApiCall(url)
    .then((response) => {
      dispatch({type: "ALL_EMP", payload: response});
    })
    .catch((error) => {
      dispatch({type: "ALL_EMP", payload: error});
    })
  }
}
