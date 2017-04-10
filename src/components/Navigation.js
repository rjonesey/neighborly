import React from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Flex, Box } from 'reflexbox';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navBar navbar-fixed-top">
        <Navbar collapseOnSelect id="nav-margin">
          <Navbar.Header>

              <div id="logo"><img src="../images/swpl-logo.png" /></div>

            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav>
              <Flex>

                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/'}}>
                    <NavItem className="navHome">HOME</NavItem>
                  </LinkContainer>
                </Box>

                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Browse'}}>
                    <NavItem className="navBrowse">BROWSE</NavItem>
                  </LinkContainer>
                </Box>

                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Neighbors'}}>
                    <NavItem className="navNeighbors">NEIGHBORS</NavItem>
                  </LinkContainer>
                </Box>

                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Account'}}>
                    <NavItem className="navAccount">ACCOUNT</NavItem>
                  </LinkContainer>
                </Box>

                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Login'}}>
                    <NavItem className="navLogin">LOGIN</NavItem>
                  </LinkContainer>
                </Box>

              </Flex>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  logUserOut: React.PropTypes.func
};

export default inject("userStore")(observer(Navigation));
