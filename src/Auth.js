import React, { Component } from 'react';
import { render } from 'react-dom';

import Cookies from 'js-cookie';


const RequireAuth = (Component) => {
  return class App extends Component {
    componentWillMount() {
      let token = 'vbnvbnmk';
      Cookies.set('myToken', token, { expires: 15 });
      let getToken = Cookies.get('myToken');
      console.log('getToken',getToken);
      if(getToken) {
        this.props.history.replace({pathname: '/'});
      }
    }
    render() {
      return <Component {...this.props} />
    }
  }
}

export { RequireAuth }
