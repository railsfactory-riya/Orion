import ApiCall from '../ApiCall';

export function loginDetails(request) {
  var input = {
    username: 'riya',
    password: 'sedin123'
  };
  let url = "admins/api_login";
  return (dispatch) => {
   dispatch({type: "LOGIN_ATTEMPT"});
   ApiCall.getApiCall(url, input)
    .then((response) => {
      dispatch({type: "LOGIN_SUCCESS", payload: response});
    })
    .catch((error) => {
      dispatch({type: "LOGIN_FAIL", payload: error});
    })
  }
}




 // export function allEmp() {
 //   var input = {
 //     username: 'balaji',
 //     password: 'Balaji123#'
 //   };
 //   let url = "admins/api_login";
 //   let result = ApiCall.postApiCall(url, input)
 //   .then(function (response) {
 //      console.log(response);
 //    })
 //    .catch(function (error) {
 //      console.log(error);
 //    });
 //    console.log(result);
 //   return {
 //     type: "USER_DETAILS",
 //     payload: result
 //   };
 // }
