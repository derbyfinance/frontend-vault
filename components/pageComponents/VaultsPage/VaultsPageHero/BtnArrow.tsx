import React, { FC } from 'react';
import ArrowDownComponent from '@components/UI/ArrowDownComponent';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});
  transition: transform 0.3s ease-in-out;
`;

type BtnArrowType = {
  open: boolean;
};

const BtnArrow: FC<BtnArrowType> = ({ open }) => {
  return (
    <StyledButtonContainer open={open}>
      <ArrowDownComponent open={open}/>
    </StyledButtonContainer>
  );
};

export default BtnArrow;
