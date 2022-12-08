import React from 'react';
import { ArrowDown } from '@icons/index';
import styled from 'styled-components';

const StyledArrowDown = styled.div`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
  transition: transform 0.3s ease-in-out;
`;

const ArrowDownComponent = ({ open }) => {
  return (
    <StyledArrowDown open={open}>
      <ArrowDown />
    </StyledArrowDown>
  );
};

export default ArrowDownComponent;
