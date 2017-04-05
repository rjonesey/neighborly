import React from 'react';
import { Button, Card,  CardTitle, CardText, CardSubtitle, CardImg } from "reactstrap";
import { inject, observer } from 'mobx-react';

ItemList.propTypes = {
  items: React.PropTypes.array.isRequired,
  account: React.PropTypes.object,
  filteredtext: React.PropTypes.string,
  userStore: React.PropTypes.object,
  user: React.PropTypes.object
};

function ItemList(props) {
  let addedItems = props.items.map(function(item) {
    let addedBy = (item && item.owner ? (item.owner.name) : "");
    return (
      <Card block key={item._id}>
        <CardImg top width="100%" src={item.url} rounded alt="Card image cap"/>
        <Card block inverse
          style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
          <CardTitle>{item.category}</CardTitle>
          <CardSubtitle>{item.condition}</CardSubtitle>
          <CardText>{item.description}</CardText>
          <CardText>{addedBy}</CardText>
          <Button>Request</Button>
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

export default inject('userStore', 'itemStore')(observer(ItemList));
