import React, { Component, Fragment } from 'react';

import Map from './Map';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Map
          defaultZoom={16}
          defaultCenter={{ lat: 54.516842, lng: 18.541941 }}
          yesIWantToUseGoogleMapApiInternals
        ></Map>
      </Fragment>
    );
  }
}

export default Main;
