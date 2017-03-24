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
      <h1>
        <img src="../images/logoSWPL.jpg" style={{width:100, marginTop: -7}} />
      </h1>
        <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"/>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: '/'}}><NavItem>Main</NavItem></LinkContainer>
              <LinkContainer to={{pathname: '/Browse'}}><NavItem>Browse Items</NavItem></LinkContainer>
              {/*<LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>*/}
              {/*<LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>My Neighbors</NavItem></LinkContainer>*/}
            </Nav>
            <Nav pullRight className="nav-bar-right"/>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
    </div>
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
