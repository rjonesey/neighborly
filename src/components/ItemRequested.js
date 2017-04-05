import React from 'react';

class ItemRequested extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="ItemRequested">
          <h1>The item has been requested, please wait!</h1>
          <img src="https://media.giphy.com/media/l3vR3SsWC9b87lT0s/giphy.gif"/>
        </div>
      </div>
    );
  }
}

export default ItemRequested;
