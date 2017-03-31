import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import UserStore from './stores/UserStore';
import ItemStore from './stores/ItemStore';
import { Provider } from 'mobx-react';
import Account from './components/Account';
import LoginCreateAccount from './components/LoginCreateAccount';
import Browse from './components/Browse';
import Activity from './components/Activity';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.css';

let userStore = new UserStore();
let itemStore = new ItemStore();

render((
  <Provider userStore={userStore} itemStore={itemStore}>
    <Router history={browserHistory}>
      <Route>
        <Route path="/Login" component={LoginCreateAccount}/>
        <Route path="/" component={Main}/>
        <Route path="/Browse" component={Browse}/>
        <Route path="/Activity" component={Activity}/>
        <Route path="/Account" component={Account}/>
      </Route>
    </Router>
  </Provider>

), document.getElementById('app'));
