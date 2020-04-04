import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DetailCard from './DetailCard';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  background-color: #000;
  border: 2px solid green;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  background-image: url('https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg');
  background-position: center;
  background-size: 60px 60px;
  &:hover {
    z-index: 1;
  }
`;

const Product = props => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <Wrapper onClick={() => handleClick()} alt={props.text}>
      {showDetail && <DetailCard />}
    </Wrapper>
  );
};

Product.defaultProps = {
  onClick: null,
};

Product.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Product;
