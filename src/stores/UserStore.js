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

  LoginUser(name, password) {
    fetch('/api/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        password: password
      })
    })
    .then(function(result) {
      console.log(result);
      return result.json();})
    .then(loginCred => {
      if (loginCred.success && loginCred.token){

        alert ('Login Successful!' + loginCred.id);
        browserHistory.push('/Main');
        this.loggedInUser=true;
        this.name=name;
        this.id = loginCred.id;
        this.token = loginCred.token;
      } else {
        alert (loginCred.message);
        this.loggedInUser=false;
        this.name="";
      }
    });
  }
}
