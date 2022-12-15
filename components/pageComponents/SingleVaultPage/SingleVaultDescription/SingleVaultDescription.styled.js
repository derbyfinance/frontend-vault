import styled from 'styled-components';

export const StyledDescriptionWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  border-radius: 6px;
`;

export const StyledDescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${({ theme }) => theme.fonts.slabMedium};
`;

export const StyledVault = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledVaultTitle = styled.div`
  font-size: 26px;
`;

export const StyledHideBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledDescriptionBody = styled.div`
  font: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const StyledHideExplanation = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;