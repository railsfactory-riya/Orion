const ApiCalls = {

  getApiCall(url) {
    let base_url = "http://orionstaging.railsfactory.com/api/";
    let fetch_url = base_url + url;
    let headers = {
      "Content-Type": "application/json"
    }
    return fetch(fetch_url, {
      method: "GET"
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
    let base_url = "http://orionstaging.railsfactory.com/api/admins/api_login";
    let fetch_url = base_url + url;
    let myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': "application/x-www-form-urlencoded"
    });
    // var data = new FormData();
    // data.append("json", JSON.stringify(input));
    return fetch(base_url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(input)
    })
    .then(function(response) {
      console.log(response);
      debugger;
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
