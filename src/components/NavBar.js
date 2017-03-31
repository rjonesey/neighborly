import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem, Grid, Col, Row, Jumbotron } from 'react-bootstrap';
import {NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand} from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { withReflex, Flex, Box } from 'reflexbox';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Navbar.Header>
            <Flex align="center" gutter={2} justify="space-between" wrap>
              <Box col={4} p={2}>
                <span id="logo"><img src="../images/swpl.jpg" style={{marginTop: -7}} /></span>
              </Box>
            </Flex>
            </Navbar.Header>
            <Nav tabs>
              <Flex align="flex-end" justify="flex-end">
                <Box auto col={3} p={4}>
                  <LinkContainer to={{pathname: '/'}}>
                    <NavItem className="navHome">HOME</NavItem>
                  </LinkContainer>
                  </Box>
                <Box auto col={3} p={4}>
                  <LinkContainer to={{pathname: '/Browse'}}>
                    <NavItem className="navBrowse">BROWSE</NavItem>
                  </LinkContainer>
                  </Box>
                <Box auto col={3} p={4}>
                  <LinkContainer to={{pathname: '/Activity'}}>
                    <NavItem className="navActivity">ACTIVITY</NavItem>
                  </LinkContainer>
                 </Box>
                <Box auto col={3} p={4}>
                  <LinkContainer to={{pathname: '/Account'}}>
                    <NavItem className="navAccount">ACCOUNT</NavItem>
                  </LinkContainer>
                  <LinkContainer to={{pathname: '/Login'}}>
                    <NavItem className="navLogin">LOGIN</NavItem>
                  </LinkContainer>
                </Box>
                {/*<Box auto col={4} p={4}>
                    <Navbar.Text>
                      <i className="fa fa-user fa-5x" aria-hidden="true"/>{this.props.userStore.firstName}!
                    </Navbar.Text>
                  <LinkContainer onClick={this.props.userStore.logUserOut} to={{pathname: '/Account'}}>
                    <NavItem>
                      <i className="fa fa-sign-out fa-5x" aria-hidden="true"/>
                    </NavItem>
                  </LinkContainer>
                </Box>*/}
              </Flex>
            </Nav>
          {this.props.children}
      </div>
    );
  }
}

Navigation.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  logUserOut: React.PropTypes.func
};

export default inject("userStore")(observer(Navigation));
