import styled from 'styled-components';

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.borderMain};
  border-radius: 6px;
`;

export const StyledDescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Slab-Medium';
`;

export const StyledVault = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledVaultLogo = styled.div``;

export const StyledVaultTitle = styled.div`
  font-size: 26px;
`;

export const StyledHideBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 14px;
  color: ${({ theme }) => theme.textFaded};
`;

export const StyledDescriptionBody = styled.div`
  font-family: 'Roboto-Regular';
  font-size: 18px;
`;

export const StyledHideExplanation = styled.div`
  cursor: pointer;
  display: flex;
`;
