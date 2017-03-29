import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, Jumbotron, Button, Well } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { render } from 'react-dom';
import Checkbox from './Checkbox';
import PowerTools from './PowerTools';
import Account from './account';
import ItemList from './ItemList';
import { Card, CardBlock, CardTitle, CardText, CardSubtitle, CardHeader, CardColumns, CardImg, Form, FormGroup, FormText, Input, Label, FormFeedback, ClassName, Modal, ModalHeader, ModalBody, ModalFooter, ButtonLabel } from "reactstrap";

class BrowseTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadItemsFromServer = this.loadItemsFromServer.bind(this);
  }

  componentDidMount() {
    this.loadItemsFromServer();
  }

  loadItemsFromServer() {
    fetch('/item')
      .then(function(result) {return result.json();})
      .then(items => this.props.itemStore.setItems(items));		
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
  }

  searchCategory () {
    const categories = [
      'Power Tools',
      'Gardening',
      'Hobby',
      'Outdoor'
    ];
  }

  render() {
    return(
      <div>
        <link rel="stylesheet" href="../../public/style.css"/>
        <div>
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav tabs style={{}}>
            <h1 id="h1"><img src="../images/swpl.jpg" style={{marginTop: -7}} /></h1>
            <LinkContainer to={{pathname: '/'}}><NavItem>Home</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/Browse'}}><NavItem>Browse Items</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/Activity'}}><NavItem>Activity</NavItem></LinkContainer>
            <LinkContainer to={{pathname: '/Account'}}><NavItem>Your Account</NavItem></LinkContainer>
            {/*<LinkContainer to={{pathname: '/MyNeighbors'}}><NavItem>   My Neighbors   </NavItem></LinkContainer>*/}
            <LinkContainer to={{pathname: '/Login'}}><NavItem>Login</NavItem></LinkContainer>
          </Nav>
            <Nav pullRight className="nav-bar-right"/>
          </Navbar.Collapse>
          {this.props.children}
        </div>
        <div>
          <Grid>
            <Jumbotron style={{ backgroundColor: '#F0F1F5', boxPack: "center" }}>

              <div className="mx-auto">
                <h1 className="display-4" style={{postion: 'center' }}>Browse the Hoods for the Goods!</h1>
              </div>

              <Form>

                <FormGroup  style={{width: "50%"}}>
                  <Label>SEARCH</Label>
                  <Input state="success" />
                  <FormFeedback/>
                  <h3 color="muted">Search your neighbors inventory!</h3>
                </FormGroup>

                <FormGroup tag="fieldset" row>
                  <legend className="col-form-legend col-sm-2">Limit Search</legend>

                  <Col sm={10}>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" />{' '}
                      Power Tools
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio3" />{' '}
                      Gardening
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio4" />{' '}
                      Hobby
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio5" />{' '}
                      Recreation
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup check row className="d-flex align-items-start">
                  <Col sm={{ size: 20, offset: 2 }}>
                    <Button className="btn btn-success btn-lg" >Search</Button>
                   </Col>
                </FormGroup>
              </Form>

            </Jumbotron>
          </Grid>
        </div>


      <div>
        <Grid>
          <Jumbotron style={{ backgroundColor: '#D1D5D8' }}>
            <CardColumns>
              <ItemList items={this.props.itemStore.items}/>
            </CardColumns>
          </Jumbotron>
        </Grid>
      </div>
    </div>
    );
  }
}

BrowseTwo.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object,
  items: React.PropTypes.object,
  user: React.PropTypes.object,
  className: React.PropTypes.object,
  buttonLabel: React.PropTypes.object
};

export default inject('itemStore', 'userStore')(observer(BrowseTwo));
