const ApiCalls = {

  getApiCall(url) {
    let base_url = "http://192.168.1.151:3000/api/";
    let api_token = "662bf5cba7782e30f14855bff7b92b6cfae99b78";
    let fetch_url = base_url + url + api_token ;
    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': "application/json"
    });
    return fetch(fetch_url, {
      method: "GET",
      headers: myHeaders
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(function(json) {
      return json;
     })
  },

  postApiCall(url, input) {
    let base_url = "http://192.168.1.151:3000/api/";
    let fetch_url = base_url + url;
    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': "application/json"
    });
    // var data = new FormData();
    // data.append("json", JSON.stringify(input));
    return fetch(fetch_url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(input)
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(function(json) {
      return json;
     })
  }

}

export default ApiCalls;
