import { extendObservable } from 'mobx';
import {browserHistory} from 'react-router';


export default class UserStore {
  constructor  () {
    extendObservable(this, {
      name: "",
      password: "",
      id: "",
      admin: false,
      email: "",
      loginMsg: "",
      loggedInUser: false,
      token: ""
    });
    this.LoginUser = this.LoginUser.bind(this);
  }

  NewUser(email, password) {
    fetch('/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(function(){
      alert ('User Account Created.  Please Log In');
      // browserHistory.push('/');
    });
  }

  LoginUser(email, password) {
    fetch('/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(function(result) {
      return result.json();})
    .then(loginCred => {
      if (loginCred.success && loginCred.token){

        alert ('Login Successful!');
        browserHistory.push('/');
        this.loggedInUser=true;
        this.email=email;
        this.id = loginCred.id;
        this.token = loginCred.token;
      } else {
        alert (loginCred.message);
        this.loggedInUser=false;
        this.email="";
      }
    });
  }
}
