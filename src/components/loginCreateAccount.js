import React from 'react';
import {browserHistory, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import CreateAccount from './CreateAccount';

class LoginCreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      admin: false,
      email: "",
      loginMsg: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleLoginUser(event) {
    event.preventDefault();
    this.props.userStore.LoginUser(this.state.email, this.state.password);
    this.setState({email: "", password: ""});
  }

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
        <Col md={5} mdPush={5}>
          <form method="" role="form">
            <legend>{this.state.loginMsg == "" ? "Please Log In!": this.state.loginMsg}</legend>

            <div className="form-group">
              <input onChange={this.handleEmailChange} value={this.state.email} type="text" className="form-control" id="email" placeholder="email address"/>
            </div>

            <div className="form-group">
              <input onChange={this.handlePasswordChange} value={this.state.password}type="password" className="form-control" id="password" placeholder="password"/>
            </div>

            <button onClick={this.handleLoginUser} type="submit" className="btn btn-primary">Submit</button><br/>
          </form>
        </Col>
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
