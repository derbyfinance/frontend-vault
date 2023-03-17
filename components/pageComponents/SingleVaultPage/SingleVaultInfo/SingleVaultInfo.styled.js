import styled from 'styled-components';

export const StyledSingleVaultInfoContainer = styled.div`
  display: flex;
  gap: 16px;
  & > :last-child {
    border-right: none;
  }
  @media only screen and (max-width: 1160px) {
    gap: 12px;
  }
`;
export const StyledBlockWrapper = styled.div`
  padding: 20px;
  border-right: 1px solid ${({ theme }) => theme.colors.borderMain};
  @media only screen and (max-width: 1180px) {
    padding: 14px;
  }
`;
export const StyledBlockInfo = styled.div`
  display: flex;
  pad: 6px;
  align-items: flex-start;
`;
export const StyledValue = styled.div`
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 32px;
  @media only screen and (max-width: 1180px) {
    font-size: 24px;
  }
`;

export const StyledTextPart = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledValueAndChange = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledChangeLabel = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 6px;
  gap: 4px;
  background-color: ${({ positive }) => (positive ? '#26A17B' : 'red')};
  border-radius: 6px;
`;
export const StyledBlockDescription = styled.div`
  font: ${({ theme }) => theme.fonts.robotoMedium};
  color: ${({ theme }) => theme.colors.textFaded};
  font-size: 16px;
`;

export const StyledRotate = styled.div`
  transform: rotate(90deg);
`;
