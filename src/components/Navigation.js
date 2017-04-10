import React from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Flex, Box } from 'reflexbox';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navBar navbar-fixed-top" id="navBarDiv">
        <Navbar collapseOnSelect id="nav-margin">
          <Navbar.Header id="navBarHeader">
            <Flex align="left">
              <Box>
                <span id="logo"><img src="../images/swpl.jpg"/></span>
              </Box>

            <Navbar.Toggle/>
            <Navbar.Collapse id="nav">

            <Nav>
              <Flex align="flex-start" justify="flex-end" nowrap>

                <Box auto col={2} p={2}>
                  <LinkContainer to={{pathname: '/'}}>
                    <NavItem className="navHome">HOME</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={2} p={2}>
                  <LinkContainer to={{pathname: '/Browse'}}>
                    <NavItem className="navBrowse">BROWSE</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={2} p={2}>
                  <LinkContainer to={{pathname: '/Activity'}}>
                    <NavItem className="navActivity">ACTIVITY</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={2} p={2}>
                  <LinkContainer to={{pathname: '/Account'}}>
                    <NavItem className="navAccount">ACCOUNT</NavItem>
                  </LinkContainer>
                </Box>

                <Box auto col={2} p={2}>
                  <LinkContainer to={{pathname: '/Login'}}>
                    <NavItem className="navLogin">LOGIN</NavItem>
                  </LinkContainer>
                </Box>

              </Flex>
            </Nav>
          </Navbar.Collapse>
          </Flex>
          </Navbar.Header>
        </Navbar>
      </div>


    );
  }
}

Navigation.propTypes = {
  logUserOut: React.PropTypes.func
};

export default inject("userStore")(observer(Navigation));
