import React, { Fragment, useState } from 'react';
import { usePosition } from 'use-position';

import Map from './Map';
import Product from './Product';

const Main = () => {
  const { latitude, longitude } = usePosition();
  const [own, setOwn] = useState(false);

  return (
    <Fragment>
      {latitude && (
        <Map
          defaultZoom={17}
          defaultCenter={{ lat: latitude, lng: longitude }}
          yesIWantToUseGoogleMapApiInternals
        >
          <Product
            key="user"
            text="foo"
            lat={latitude + 0.001}
            lng={longitude + 0.001}
            variant="search"
            handleOwn={() => setOwn(true)}
          />
          {own && (
            <Product
              key="me"
              text="foo"
              lat={latitude}
              lng={longitude}
              variant="own"
            />
          )}
        </Map>
      )}
    </Fragment>
  );
};

export default Main;
