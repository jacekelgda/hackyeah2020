import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DetailCard from './DetailCard';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Product = props => (
  <Wrapper
    alt={props.text}
    {...(props.onClick ? { onClick: props.onClick } : {})}
  >
    <DetailCard style={{ width: '100px', height: '100px' }} />
  </Wrapper>
);

Product.defaultProps = {
  onClick: null,
};

Product.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Product;
