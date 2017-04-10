import React from 'react';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation';

class Main extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div id="mainLogo">
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object
};

export default inject('userStore', 'itemStore')(observer(Main));
