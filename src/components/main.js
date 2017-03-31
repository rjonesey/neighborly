import React from 'react';
import { Navbar, Nav, NavItem, Grid, Col, Row, Jumbotron } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from 'react-dom';
import Browse from './Browse';
import NavBar from './NavBar';



class Main extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <NavBar/>
        {this.props.children}
        <div style={{color:"grey"}}>
          <div>
            <img style={{width:"100vw", height:"83.5vh", overflow:"hidden"}} src="../images/home.jpg"/>
          </div>
        </div>

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
