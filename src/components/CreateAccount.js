import React from 'react';
import {browserHistory, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';

class CreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      admin: false,
      email: "",
      loginMsg: ""
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleNewUser(event) {
    event.preventDefault();
    let user1 = {email: this.state.email, password: this.state.password};
    console.log(user1);
    this.props.userStore.NewUser(this.state.email, this.state.password);
    this.setState({ password: "", email: ""});
  }

  render() {
    return (
        <Col md={5} mdPull={5}>
          <form method="" role="form">
            <legend>{this.state.loginMsg == "" ? "New to the Neighborhood? Create an Account!": this.state.loginMsg}</legend>

            <div className="form-group">
              <input onChange={this.handleEmailChange} value={this.state.email} type="text" className="form-control" id="email" placeholder="email address"/>
            </div>

            <div className="form-group">
              <input onChange={this.handlePasswordChange} value={this.state.password}type="password" className="form-control" id="password" placeholder="password"/>
            </div>

            <button onClick={this.handleNewUser} type="submit" className="btn btn-primary">Submit</button><br/>
          </form><br/>
          <button onClick={this.handleNewUser} type="submit" className="btn btn-primary">Continue with Facebook</button>
        </Col>
    );
  }
}

CreateAccount.propTypes = {
  userStore:  React.PropTypes.object,
  children: React.PropTypes.object
};

export default inject("userStore")(observer(CreateAccount));
