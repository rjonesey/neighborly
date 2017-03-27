import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ItemStore from '../stores/ItemStore';

ItemList.propTypes = {
  items: React.PropTypes.object,
  ItemStore: React.PropTypes.object,
  account: React.PropTypes.object
};

function ItemList(params) {
  let addedItems = params.items.map(function(item) {
    return (
      <li key={item._id}>
        <img src={item.url}/>
      </li>
    );
  });

  return (
    <div>
      <Grid>
        <Row>
          {addedItems}
        </Row>
      </Grid>
    </div>
  );
}



export default ItemList;
