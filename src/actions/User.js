import ApiCall from '../ApiCall';

export function empDetails(request) {
  let url = "employees/452?access_token=";
  ApiCall.getApiCall(url)
  .then(function (response) {
     console.log(response);
    //  request = response.json();
    //  if(response.status == 200) {}
   })
   .catch(function (error) {
     console.log(error);
   });
  return {
    type: "USER_DETAILS",
    payload: request
  };
}

export function otherDetails(request) {
  let url = "employees/452/skills?access_token=";
  ApiCall.getApiCall(url)
  .then(function (response) {
     console.log(response);
    //  request = response.json();
    //  if(response.status == 200) {}
   })
   .catch(function (error) {
     console.log(error);
   });
  return {
    type: "OTHER_DETAILS",
    payload: request
  };
}

export function allEmp(request) {
  let url = "employees?access_token=";
  ApiCall.getApiCall(url)
  .then(function (response) {
     console.log(response);
    //  request = response.json();
    //  if(response.status == 200) {}
   })
   .catch(function (error) {
     console.log(error);
   });
  return {
    type: "ALL_EMP",
    payload: request
  };
}


// export function allEmp(request) {
//   var input = {
//     username: 'balaji',
//     password: 'Balaji123#'
//   };
//   let url = "admins/api_login";
//   ApiCall.postApiCall(url, input)
//   .then(function (response) {
//      console.log(response);
//     //  request = response.json();
//     //  if(response.status == 200) {
//     //    let token = response.token;
//     //    let name = response.name;
//     //    Cookies.set('myToken', token, { expires: 15 });
//     //    Cookies.set('myName', name, { expires: 15 });
//     //    window.location.replace('/');
//     //  }
//     //  else if(response.status == 404) {
//     //    console.log("404!!!!!!!");
//     //  }
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//   return {
//     type: "ALL_EMP",
//     payload: request
//   };
// }
