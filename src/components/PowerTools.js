import React from 'react';
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Col, Grid, Row } from 'react-bootstrap';

class PowerTools extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <legend>Words</legend>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PowerTools;
