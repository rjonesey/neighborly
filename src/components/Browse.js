import React from 'react';
import { Col, Grid, Jumbotron, Button,  Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import ItemList from './ItemList';
import Navigation from './Navigation';
import { CardColumns, Form, FormGroup, Input, Label, FormFeedback,
  ButtonGroup, buttonLabel } from "reactstrap";



class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      modal: false,
      cSelected: []
    };
    this.toggle = this.toggle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.loadItemsFromServer = this.loadItemsFromServer.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
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


  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return(
      <div>
        <div>
          <Navigation/>
            </div>
              <div style={{paddingTop:"200px"}}>
                <Grid>
                  <Jumbotron style={{ backgroundColor: '#F0F1F5', boxPack: "center" }}>

                    <div className="mx-auto">
                      <span className="Hoods">Browse the Hoods for the Goods!</span>
                    </div>

                    <Form>

                  <FormGroup  style={{width: "50%"}}>
                    <Label>SEARCH</Label>
                    <Input state="success" placeholder="Search the Neighborhood"/>
                    <FormFeedback/>
                  </FormGroup>

                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-legend col-sm-2">Limit Search</legend>
                    <Col sm={10}>

                    <ButtonGroup>
                        <Button color="primary" onClick={() =>
                          this.onCheckboxBtnClick("Power Tools")}
                          active={this.state.cSelected.includes("Power Tools")}>Power Tools
                        </Button>

                        <Button color="primary" onClick={() =>
                          this.onCheckboxBtnClick("Hobby")}
                          active={this.state.cSelected.includes("Hobby")}>Hobby
                        </Button>

                        <Button color="primary" onClick={() =>
                          this.onCheckboxBtnClick("Gardening")}
                          active={this.state.cSelected.includes("Gardening")}>Gardening
                        </Button>

                        <Button color="primary" onClick={() =>
                          this.onCheckboxBtnClick("Recreation")}
                          active={this.state.cSelected.includes("Recreation")}>Recreation
                        </Button>

                        <Button color="primary" onClick={() =>
                          this.onCheckboxBtnClick("Kitchen")}
                          active={this.state.cSelected.includes("Kitchen")}>Kitchen
                        </Button>
                      </ButtonGroup>

                    </Col>
                  </FormGroup>

                  <FormGroup check row className="d-flex align-items-start">
                    <Col sm={{ size: 20, offset: 2 }}>
                      <Button className="btn btn-success btn-lg">Search</Button>
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
                <div>
                  <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}
                  </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                        unt mollit anim id est laborum.
                        </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                  </div>
              </CardColumns>
            </Jumbotron>
          </Grid>
        </div>
      </div>
    );
  }
}

Browse.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object,
  items: React.PropTypes.object,
  user: React.PropTypes.object,
  className: React.PropTypes.object
};

export default inject('itemStore', 'userStore')(observer(Browse));
