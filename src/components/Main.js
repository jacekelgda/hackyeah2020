import React, { Component, Fragment } from 'react';

import Map from './Map';
import Product from './Product';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Map
          defaultZoom={16}
          defaultCenter={{ lat: 54.516842, lng: 18.541941 }}
          yesIWantToUseGoogleMapApiInternals
        >
          <Product
            onClick={() => {
              console.log('click ...');
            }}
            key="foo"
            text="foo"
            lat={54.516842}
            lng={18.541941}
          />
        </Map>
      </Fragment>
    );
  }
}

export default Main;
