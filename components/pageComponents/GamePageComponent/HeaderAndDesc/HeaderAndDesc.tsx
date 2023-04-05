import React from 'react';
import {
  StyledDesc,
  StyledHeader,
  StyledWrapper,
} from './HeaderAndDesc.styled';

const HeaderAndDesc = ({ header, description }) => {
  return (
    <StyledWrapper>
      <StyledHeader>{header}</StyledHeader>
      <StyledDesc>{description}</StyledDesc>
    </StyledWrapper>
  );
};

export default HeaderAndDesc;
