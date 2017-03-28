import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import ItemStore from '../stores/ItemStore';
import BrowseTwo from './BrowseTwo';
import { Card, CardBlock, CardTitle, CardText, CardSubtitle, CardHeader, CardColumns, CardImg } from "reactstrap";
import { render } from 'react-dom';

ItemList.propTypes = {
  items: React.PropTypes.array.isRequired,
  account: React.PropTypes.object
};

function ItemList(props) {
  let addedItems = props.items.map(function(item) {
    return (
          <CardBlock key={item._id}>
            <CardImg top width="100%" src={item.url} className="rounded"/>
            <CardBlock>
              <CardTitle>{item.category}</CardTitle>
              <CardSubtitle>{item.condition}</CardSubtitle>
              <CardText>{item.description}</CardText>
            </CardBlock>
          </CardBlock>
    );
  });

  return (
    <Card>
      {addedItems}
    </Card>
  );
}

export default ItemList;
