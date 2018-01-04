import ApiCall from '../ApiCall';

const API_TOKEN = 'd1961f5c65842e8ee8cefcedcd3a509f1b3cec98';

export function empDetails(request) {
  // var input = {
  //   username: 'riya',
  //   password: 'sedin123'
  // };
  // let url = "admins/api_login";
  // ApiCall.postApiCall(url, input)
  // .then(function (response) {
  //    console.log(response);
  //   //  request = response.json();
  //   //  if(response.status == 200) {
  //   //    let token = response.token;
  //   //    let name = response.name;
  //   //    Cookies.set('myToken', token, { expires: 15 });
  //   //    Cookies.set('myName', name, { expires: 15 });
  //   //    window.location.replace('/');
  //   //  }
  //   //  else if(response.status == 404) {
  //   //    console.log("404!!!!!!!");
  //   //  }
  //  })
  //  .catch(function (error) {
  //    console.log(error);
  //  });
  return {
    type: "EMP_DETAILS",
    payload: request
  };
}
