import { ArrowDown } from '@icons/index';
import React from 'react';

import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});
  transition: transform 0.3s ease-in-out;
`;

const BtnArrow = ({ open }) => {
  return (
    <StyledButtonContainer open={open}>
      <ArrowDown />
    </StyledButtonContainer>
  );
};

export default BtnArrow;
