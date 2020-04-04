import React, { Component, Fragment } from 'react';
import { myLocation, nearUserLocation } from '../staticData';

import Map from './Map';
import Product from './Product';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Map
          defaultZoom={20}
          defaultCenter={myLocation}
          yesIWantToUseGoogleMapApiInternals
        >
          <Product
            key="user"
            text="foo"
            lat={nearUserLocation.lat}
            lng={nearUserLocation.lng}
            variant="search"
          />
          <Product
            key="me"
            text="foo"
            lat={myLocation.lat}
            lng={myLocation.lng}
            variant="own"
          />
        </Map>
      </Fragment>
    );
  }
}

export default Main;
