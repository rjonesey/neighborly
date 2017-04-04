import React from 'react';
import { Card,  CardTitle, CardText, CardSubtitle, CardImg } from "reactstrap";
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

ItemList.propTypes = {
  items: React.PropTypes.array.isRequired,
  account: React.PropTypes.object
};

function ItemList(props) {
  let addedItems = props.items.map(function(item) {
    return (
      <Card block key={item._id}>
        <CardImg top width="100%" src={item.url} rounded alt="Card image cap"/>
        <Card block inverse
          style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
          <CardTitle>{item.category}</CardTitle>
          <CardSubtitle>{item.condition}</CardSubtitle>
          <CardText>{item.description}</CardText>
          <LinkContainer to={{pathname: '/Requested'}}>
            <Button>Request</Button>
          </LinkContainer>
        </Card>
      </Card>
    );
  });

  return (
    <div>
      {addedItems}
    </div>
  );
}

export default ItemList;
