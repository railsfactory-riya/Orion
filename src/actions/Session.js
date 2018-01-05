import ApiCall from '../ApiCall';

export function empDetails(request) {
  var input = {
    username: 'riya',
    password: 'sedin123'
  };
  let url = "admins/api_login";
  ApiCall.postApiCall(url, input)
  .then(function (response) {
     console.log(response);
    //  request = response.json();
    //  if(response.status == 200) {
    //    let token = response.token;
    //    let name = response.name;
    //    Cookies.set('myToken', token, { expires: 15 });
    //    Cookies.set('myName', name, { expires: 15 });
    //    window.location.replace('/');
    //  }
    //  else if(response.status == 404) {
    //    console.log("404!!!!!!!");
    //  }
   })
   .catch(function (error) {
     console.log(error);
   });
  return {
    type: "USER_DETAILS",
    payload: request
  };
}
