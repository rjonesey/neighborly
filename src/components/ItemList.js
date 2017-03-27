import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ItemStore from '../stores/ItemStore';
import BrowseTwo from './BrowseTwo';


ItemList.propTypes = {
  items: React.PropTypes.array.isRequired,
  account: React.PropTypes.object
};

function ItemList(props) {
  console.log(props.items.length);
  let addedItems = props.items.map(function(item) {
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
          <li>
            {addedItems}
          </li>
        </Row>
      </Grid>
    </div>
  );
}

export default ItemList;
