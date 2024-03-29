import styled from 'styled-components';

export const StyledRightWrapper = styled.div``;
export const StyledMax = styled.button`
  margin-right: 20px;
  font: ${({ theme }) => theme.fonts.robotoBold};
  font-size: 14px;
  border: none;
  background: none;
  cursor: pointer;
`;
export const StyledBalance = styled.div`
  font: ${({ theme }) => theme.fonts.robotoLight};
  color: ${({ theme }) => theme.colors.textFaded};
  font-size: 14px;
  white-space: nowrap;
`;
export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFlexIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.fonts.robotoRegular};
  gap: 12px;
`;
