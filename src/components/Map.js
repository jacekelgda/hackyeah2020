import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const Map = ({ children, ...props }) => {
  console.log({ env: process.env });
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

Map.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Map.defaultProps = {
  children: null,
};

export default Map;
