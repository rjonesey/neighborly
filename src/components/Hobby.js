import React from 'react';
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Col, Grid, Row } from 'react-bootstrap';

class Hobby extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
              <div className="d-flex w-25 flex-flow-column-wrap justify-content-between">
              <img src="http://cdn.hiconsumption.com/wp-content/uploads/2015/09/Hedon-Hedonist.jpg" height="200" width="300"/>

                <h5 className="mb-1">Helmet</h5>
                <small>One old slightly musky motorcyle helmet -- works great!!</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
              <div className="d-flex w-25 justify-content-between">
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPZY2vRCRoKGb5xWv9U87luFbNZDIw099r0-55UXnWNExMq6lH" height="200" width="300"/>
                <h5 className="mb-1">Hot Air Balloon</h5>
                <small className="text-muted">Must be licensed to operate</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
              <div className="d-flex w-25 justify-content-between">
              <img src="http://b.cdnbrm.com/images/products/large/roof_racks_bags/proz_roof_cargo_box_hero_2.jpg" height= "200" width= "300"/>
                <h5 className="mb-1">Cargo Box</h5>
                <small className="text-muted">Must have roof rack for box to attach</small>
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small className="text-muted">Donec id elit non mi porta.</small>
            </a>
            </div>
        </Row>
      </Grid>
    );
  }
}




export default Hobby;
