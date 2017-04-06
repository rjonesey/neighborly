import React from 'react';
import Navigation from './Navigation';
import { Card, CardColumns, CardTitle, CardImg } from "reactstrap";
import { inject, observer } from 'mobx-react';

class ItemRequested extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Navigation/>
        </div>

        <div>
          <CardColumns>
            <Card block>
              <CardImg top width="100%" src={"https://media.giphy.com/media/l3vR3SsWC9b87lT0s/giphy.gif"} rounded alt="Card image cap"/>
              <Card block inverse
                style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
                <CardTitle>Let's hope your neighbor, {this.props.userStore.name},
                isn't an asshole and accepts your request!
                </CardTitle>
              </Card>
            </Card>
          </CardColumns>
        </div>
      </div>

    );
  }
}

ItemRequested.propTypes = {
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object,
  items: React.PropTypes.object,
  user: React.PropTypes.object
};

export default inject ('userStore')(observer(ItemRequested));
