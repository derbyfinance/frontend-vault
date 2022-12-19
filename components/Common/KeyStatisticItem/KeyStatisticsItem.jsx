import React from 'react';
import styled from 'styled-components';

const StyledKeyStatisticsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  border-radius: 6px;
  padding: 20px;
  min-width: 280px;
`;

const StyledKeyStatisticsValue = styled.div`
  font: ${({ theme }) => theme.fonts.robotoBold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.headerMain};
`;

const StyledKeyStatisticsDescription = styled.div`
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

const KeyStatisticsItem = ({ value, description }) => {
  return (
    <StyledKeyStatisticsContainer>
      <StyledKeyStatisticsValue>{value}</StyledKeyStatisticsValue>
      <StyledKeyStatisticsDescription>
        {description}
      </StyledKeyStatisticsDescription>
    </StyledKeyStatisticsContainer>
  );
};

export default KeyStatisticsItem;
