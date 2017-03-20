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
  }
};
