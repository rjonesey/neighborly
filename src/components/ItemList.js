import React from 'react';
import { Button, Card,  CardTitle, CardText, CardSubtitle, CardImg } from "reactstrap";

ItemList.propTypes = {
  items: React.PropTypes.array.isRequired,
  account: React.PropTypes.object,
  filteredtext: React.PropTypes.string
};

function ItemList(props) {
  let addedItems = props.items.map(function(item) {
    return (
<<<<<<< HEAD
      <Card block key={item._id}>
        <CardImg top width="100%" src={item.url} rounded alt="Card image cap"/>
        <Card block inverse
          style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
          <CardTitle>{item.category}</CardTitle>
          <CardSubtitle>{item.condition}</CardSubtitle>
          <CardText>{item.description}</CardText>
          <Button>Request</Button>
        </Card>
      </Card>
=======
          <Card block key={item._id}>
            <CardImg top width="100%" src={item.url} rounded alt="Card image cap"/>
            <Card block inverse
              style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
              <CardTitle>{item.category}</CardTitle>
              <CardSubtitle>{item.condition}</CardSubtitle>
              <CardText>{item.description}</CardText>
              <Button>Request</Button>
            </Card>
          </Card>

>>>>>>> a5c51d800b7bddd622b12138bb4fc495792aa3d7
    );
  });

  return (
    <div>
      {addedItems}
    </div>
  );
}

export default ItemList;
