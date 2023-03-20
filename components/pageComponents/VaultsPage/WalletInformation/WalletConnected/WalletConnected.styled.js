import StyledMainButton, {
  ConnectYourWallet,
} from '@components/Common/MainButton/MainButton.styled';
import styled from 'styled-components';

export const StyledWalletConnectedContainer = styled.div`
  position: sticky;
  top: 155px;
  text-align: left;
  // max-width: 425px;
  background: ${({ theme }) => theme.colors?.backgroundMain};
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  padding: 48px 24px;
  height: 540px;
`;

export const StyledConnectedHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 168px;
  margin-bottom: 50px;
`;

export const StyledWalletConnectedHeader = styled.div`
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.headerMain};
  white-space: nowrap;
`;

export const StyledConnectedRow = styled.tr`
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  }
`;

export const StyledVaultRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
`;

export const StyledWalletConnectedTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  & > :last-child {
    border: none;
  }
`;

export const StyledConnectedIcon = styled.td`
  width: 55px;
  height: 66px;
`;

export const StyledConnectedTitle = styled.td`
  padding: 20px;
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 16px;
  white-space: nowrap;
`;

export const StyledConnectedValue = styled.td`
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 16px;
`;

export const StyledVaultTitle = styled.td`
  padding: 20px;
  white-space: nowrap;
  font: ${({ theme }) => theme.fonts.slabLight};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledVaultBalance = styled.td`
  font: ${({ theme }) => theme.fonts.slabLight};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledHiddenBalance = styled.td`
  font: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 16px;
  letter-spacing: 0.25em;
  color: #e2e2e2;
  text-align: right;
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const StyledStakeAwardsButton = styled(StyledMainButton)`
  background: ${({ theme }) => theme.colors.buttonMain};
`;
