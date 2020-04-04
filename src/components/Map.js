import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { withFirebase } from './Firebase';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const MapBase = ({ children, firebase, ...props }) => {
  if (firebase) {
    console.log(firebase);
  }
  console.log('render ...');
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </Wrapper>
  );
};

MapBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

MapBase.defaultProps = {
  children: null,
};

const Map = withFirebase(MapBase);

export default Map;
