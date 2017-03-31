import React from 'react';
import {browserHistory, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import CreateAccount from './CreateAccount';
import Login from './Login';

class LoginCreateAccount extends React.Component {

  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
        <Grid>
          <Row className="show-grid">
            <Login/>
            <CreateAccount/>
          </Row>
        </Grid>
      </div>
    );
  }
}

LoginCreateAccount.propTypes = {
  LoginUser: React.PropTypes.func,
  userStore:  React.PropTypes.object,
  children: React.PropTypes.object
};

export default inject("userStore")(observer(LoginCreateAccount));
