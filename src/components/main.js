import React from 'react';
import { Navbar, Nav, NavItem, Grid, Col, Row, Jumbotron } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { Card, Button, CardImg, CardTitle, CardText, CardHeader, CardColumns, CardDeck, CardSubtitle, CardBlock, Modal, ModalHeader, ModalBody, ModalFooter, ButtonLabel, Form, FormGroup, Label, Input, FormFeedback, FormText, AutoComplete, Search, SearchForm, SearchForminReact, absoluteWrapper, GridItems, Module, centeredWithWrapper } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from 'react-dom';
import Browse from './Browse';
import HeaderNavigation from './HeaderNavigation';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';



bootstrapUtils.addStyle(Button, 'custom');
<link rel="stylesheet" href="../../public/style.css"/>;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return(
      <div>

        <HeaderNavigation/>
        {this.props.children}

      <div>
        <Grid>
          <Jumbotron>
          <Form>
            <FormGroup color="success">
              <Label for="exampleEmail">SEARCH</Label>
                <Input state="success" />
                <FormFeedback/>
                <FormText color="muted">Search your neighbors inventory!</FormText>
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
            <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button className="btn btn-success">Submit</Button>
        </Col>
          </FormGroup>
          </Form>
         </Jumbotron>
       </Grid>
      </div>


<div>
  <Grid>
    <Jumbotron>
      <CardColumns>

       <Card block>
        <CardImg  top width="100%" src="https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg" className="rounded" alt="Card image cap" />

          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle >Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg className="rounded" top width="100%" src="http://www.homedepot.com/catalog/productImages/1000/79/79aab6e4-a7f0-43f8-ae80-739b428bfae3_1000.jpg" alt="Card image cap" />
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://www.rei.com/media/product/875163" alt="Card image cap" />
          <Card block inverse color="primary">
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/71L6KlixIXL._SL1500_.jpg" alt="Card image cap" />
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://cloudfront.zoro.com/product/full/Z2oM8yqcpEx_.JPG" alt="Card image cap" />
          <Card block inverse color="primary">
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="http://d3d71ba2asa5oz.cloudfront.net/53000671/images/mst5249a.jpg" alt="Card image cap" />
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://smhttp-ssl-17653.nexcesscdn.net/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/d/gdo610.jpg" alt="Card image cap" />
          <Card block inverse color="primary">
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="http://www.professional-power-tool-guide.com/wp-content/uploads/2008/08/women-orbital-sander.jpg" alt="Card image cap" />
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/81LmkUY3lLL._SL1500_.jpg" alt="Card image cap" />
          <Card block inverse color="primary">
          <CardTitle>Canoe</CardTitle>
          <CardSubtitle>For lakes only</CardSubtitle>
          <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/81LmkUY3lLL._SL1500_.jpg" alt="Card image cap" />
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://cloudfront.zoro.com/product/full/Z0xGIvicpEx_.JPG" alt="Card image cap" />
          <Card block inverse color="primary">
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                  <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg" alt="Card image cap" />
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland   waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg" alt="Card image cap" />
          <Card block inverse color="primary">
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg" alt="Card image cap" />
          <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
            <CardTitle>Canoe</CardTitle>
              <CardSubtitle>For lakes only</CardSubtitle>
                 <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
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
        <CardImg top width="100%" src="https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg" alt="Card image cap" />
          <Card block inverse color="primary">
            <CardTitle>Canoe</CardTitle>
               <CardSubtitle>For lakes only</CardSubtitle>
                 <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
          <Button className="btn btn-success" id="Popover1" onclick={this.toggle}>Request</Button>
        </Card>
      </Card>

      <Card block outline color="secondary">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>

      <Card>
        <Card block inverse color="danger">
          <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
      </Card>

      <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
               <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>

      <Card block inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>

            </CardColumns>
          </Jumbotron>
        </Grid>
      </div>
    </div>






    );

  }
}


Main.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object,
  className: React.PropTypes.object,
  buttonLabel: React.PropTypes.object
};

export default inject('userStore', 'itemStore')(observer(Main));
