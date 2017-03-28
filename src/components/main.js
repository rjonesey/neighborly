

import React from 'react';
import { Navbar, Nav, NavItem, Row, Col, Grid, Jumbotron, Media } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { inject, observer } from 'mobx-react';
import { render } from 'react-dom';
import Checkbox from './Checkbox';
import PowerTools from './PowerTools';
import Account from './account';
import ItemList from './ItemList';
import { Card, CardBlock, CardTitle, CardText, CardSubtitle, CardHeader, CardColumns, CardImg } from "reactstrap";
import HeaderNavigation from './HeaderNavigation';


class Main extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <div>
          <HeaderNavigation/>
          {this.props.children}
        </div>

        <div>
          <Grid>
            <Jumbotron>
              <CardColumns>
                <Card block>
                  <CardImg top width="100%"        src="https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg" rounded alt="Card image cap" />
                    <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                      <CardTitle >Canoe</CardTitle>
                        <CardSubtitle>For lakes only</CardSubtitle>
                        <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent      heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix      sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
                    </Card>
                  </Card>
                </CardColumns>
              </Jumbotron>
            </Grid>

            <div>
          <Grid>
            <Jumbotron>
              <CardColumns>
                <Card block>
                  <CardImg top width="100%"        src="https://coloradowatersports.com/images/com_hikashop/upload/canoe.jpg" rounded alt="Card image cap" />
                    <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                      <CardTitle >Canoe</CardTitle>
                        <CardSubtitle>For lakes only</CardSubtitle>
                        <CardText>Craft beer cronut +1, gluten-free neutra literally you probably havent      heard of them beard. Brooklyn coloring book poutine raclette tofu hashtag, la croix      sartorial deep v pok pok iceland waistcoat austin. Kale chips.</CardText>
                    </Card>
                  </Card>
                </CardColumns>
              </Jumbotron>
            </Grid>
          </div>
        </div>

        <div>
          <Jumbotron>
            <Media>
              <Media left href="#">
              <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
            </Media>
              <Media body>
                <Media heading>
                  Media heading
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
               </Media>
            </Media>
        </Jumbotron>
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
