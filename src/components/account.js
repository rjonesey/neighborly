import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { inject, observer } from 'mobx-react';


class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "",
      category: "",
      description: "",
      condition: ""
    };

    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
  }

  handleBrandChange(e) {
    this.setState({brand: e.target.value});
  }

  handleCategoryChange(e) {
    this.setState({category: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleConditionChange(e) {
    this.setState({condition: e.target.value});
  }

  handleNewItem(event) {
    event.preventDefault();
    this.props.itemStore.newItem(this.state);
    console.log(event);
  }


  render() {
    return(
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
                {/*<LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>*/}
                {/*<LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>My Neighbors</NavItem></LinkContainer>*/}
                <LinkContainer to={{pathname: '/Account'}}><NavItem>Your Account!</NavItem></LinkContainer>
              </Nav>
              <Nav pullRight className="nav-bar-right"/>
            </Navbar.Collapse>
          </Navbar>
          {this.props.children}
        </div>
        <div>
      <form method="" role="form">
          <legend>Add Your Items!!</legend>

          <div className="form-group">
            <input onChange={this.handleBrandChange} value={this.state.brand}  className="form-control" id="brand" placeholder="brand"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleCategoryChange} value={this.state.category} className="form-control" id="category" placeholder="category"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleDescriptionChange} value={this.state.description} className="form-control" id="description" placeholder="description"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleConditionChange} value={this.state.condition} className="form-control" id="condition" placeholder="condition"/>
          </div>

          <button onClick={this.handleNewItem} type="submit" className="btn btn-primary">Add Your Item!</button>
          </form>
       </div>
    </div>
    );
  }
}

Account.propTypes = {
  children: React.PropTypes.object,
  newItem: React.PropTypes.func,
  itemStore: React.PropTypes.object
};

export default inject ('itemStore')(observer(Account));
