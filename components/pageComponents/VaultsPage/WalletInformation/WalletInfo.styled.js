import styled from 'styled-components';

export const StyledNotConnectedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.gradientWallet};
  padding: 148px 50px 133px;
  border-radius: 6px;
  border: ${({ theme }) => theme.colors.borderMain} 1px solid;
`;

export const WalletInfoConnectedStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.backgroundMain};
  background: ${({ theme }) => theme.font.robotoRegular};
  color: ${({ theme }) => theme.colors.textWalletInfo};
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  border-radius: 6px;
  padding: 50px 24px 38px;
  gap: 100px;
`;

export const StyledConnectedItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${({ theme }) => theme.font.robotoRegular};
  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderMain};
  gap: 120px;
`;

export const StyledWalletHoldings = styled.div`
  display: flex;
  gap: 80px;
`;

export const StyledConnectedLeftWrapper = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

export const StyledAmountConnected = styled.div`
  font-weight: ${({ isBalanced }) => (isBalanced ? '400' : 'black')};
  color: ${(props) =>
    props.isBalanced ? `${props.theme.colors.textBalancePositive}` : 'black'};
`;

export const StyledWalletData = styled.div``;
