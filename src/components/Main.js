import React from 'react';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Navigation';

class Main extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Navigation/>
        {this.props.children}
        <div id="main"style={{color:"grey", paddingTop:"133px"}}>
          <div className="collage">
            <img style={{width:"70vw", height:"80vh", overflow:"hidden" }}
            src="../images/blackcollage.jpg"/>
          </div>
        </div>

      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object
};

export default inject('userStore', 'itemStore')(observer(Main));
