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
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount ()  {
    this.selectedCheckboxes = new Set();
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

        <h1><img src="../images/logoSWPL.jpg" style={{width:100, marginTop: -7}} /></h1>
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
                <LinkContainer to={{pathname: '/Login'}}><NavItem>Be Neighborly!</NavItem></LinkContainer>
              </Nav>
              <Nav pullRight className="nav-bar-right"/>
            </Navbar.Collapse>
          </Navbar>
          {this.props.children}
        </div>



        <div>
          <Grid>
            <Jumbotron style={{ backgroundColor: '#F0F1F5', boxPack: "center" }}>

              <div className="mx-auto">
                <h1 className="display-4" style={{postion: 'center' }}>Browse the Hood for the Goods!</h1>
                  <Well style={{ fontSize: "20px" }}>Neigbors sharing with Neigbors. Passing it forward!</Well>
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

              <Card block>
                <CardImg top width="100%" src="https://canoeguybc.files.wordpress.com/2014/01/bobs-special-06.jpg" style={{ img: "rounded" }} alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <CardTitle>Canoe</CardTitle>
                  <CardSubtitle>Good Condition</CardSubtitle>
                  <h4>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. </h4>
                  <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Request</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                    Narwhal occupy sriracha, kitsch succulents brooklyn fam letterpress PBR&B tilde 8-bit knausgaard mlkshk. Pop-up kombucha etsy, lomo deep v tote bag pinterest sriracha polaroid whatever prism gentrify occupy hella scenester.
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}<br/>
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                   </Modal>
                </Card>
              </Card>

              <Card block>
                <CardImg top width="100%"        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTt72zTbNP-jCEbHziEYO82k5qIEpztPvFUqs3S5T5nVkn8zXVy" rounded alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <CardTitle>Floor Jack</CardTitle>
                  <CardSubtitle>average condition</CardSubtitle>
                  <CardText>Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
                </Card>
              </Card>

              <Card block>
                <CardImg top width="100%"        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKj9uM1TIDy2ps3BiZgepvow44HCKIyhSEX_xCiJZKZFSUX9Gmbg" rounded alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <CardTitle>Table Saw</CardTitle>
                  <CardSubtitle>Average Condition</CardSubtitle>
                  <CardText>Craft beer cronut +1, gluten-free neutra literally you probably haven heard of them beard. Brooklyn coloring book Kale chips.</CardText>
                </Card>
              </Card>

              <Card block>
                <CardImg top width="100%"        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlpWW8PJ1YXw75ElzuvWoopT3e_jDTY_dBSjxt2AHpuRi-WLRL" rounded alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <CardTitle>Wheel Barrow</CardTitle>
                  <CardSubtitle>Easier on the back than on the eyes</CardSubtitle>
                  <CardText>Craft beer cronut +1, gluten-free neutra literally beard. Brooklyn coloring  hashtag, la croixsartorial k iceland waistcoat austin. Kale chips.</CardText>
                </Card>
              </Card>

              <Card block>
                <CardImg top width="100%"        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYYkwnS9nBp12aU8wLaT5kSok1_Y2IpisPAtL1MlJZk7RWhsaSwg" rounded alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <CardTitle>Hachet</CardTitle>
                  <CardSubtitle>Split wood like butta!</CardSubtitle>
                  <CardText> Brooklyn coloring book  la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
                </Card>
              </Card>

              <Card block>
                <CardImg top width="100%"        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQsXAyE6RCMt5CLawQIGcbpTWGSew4FwiqvXvgYPKH6Jn9SPThDg" rounded alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <CardTitle>Paint Gun Sprayer</CardTitle>
                  <CardSubtitle>Works great</CardSubtitle>
                  <CardText>Craft beer cronut +1, austin. Kale chips.</CardText>
                </Card>
              </Card>

              <Card block>
                <CardImg top width="100%"        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQY2epBJvSCRgDztQsUduUbDVqTfcP5YoADJLoyrw5szBF5RgQY" rounded alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <CardTitle>Carpet Cleaner</CardTitle>
                  <CardSubtitle>Quirky but cleans well!</CardSubtitle>
                  <CardText>Craft beer cronut +1, gluten-free la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
                </Card>
              </Card>

              <Card block>
                <CardImg top width="100%"        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbF_-1mwkdVfedXSUFKnxRhS4H6oru2Fx0ND5XHRxGD_VHrcqW" rounded alt="Card image cap" />
                <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                  <h2>Outdoor Canvas Party Tent</h2>
                  <h3>Good Condition</h3>
                  <h4>Craft beer cronut +1, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</h4>
                </Card>
              </Card>
            </CardColumns>
          </Jumbotron>
        </Grid>
      </div>





              <div>
                <Grid>
                  <CardColumns>
                    <Col sm={6}>
                    <ItemList items={this.props.itemStore.items}/>
                    </Col>
                  </CardColumns>
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
