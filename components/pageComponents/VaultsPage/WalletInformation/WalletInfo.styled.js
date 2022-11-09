import styled from 'styled-components';

export const StyledNotConnectedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* align-content: center; */
  text-align: center;
  color: ${(props) => props.theme.textSecondary};
  background: ${({ theme }) => theme.gradientWallet};
  padding: 148px 50px 133px;
  border-radius: 6px;
`;

export const WalletInfoConnectedStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.backgroundMain};
  font-family: 'Roboto-Regular';
  font-weight: 400;
  color: ${({ theme }) => theme.textWalletInfo};
  border: 1px solid ${({ theme }) => theme.borderMain};
  border-radius: 6px;
  padding: 50px 24px 38px;
  gap: 100px;
`;

export const StyledConnectedItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto-Regular;
  font-weight: 400;
  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.borderMain};
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
  font-weight: ${(props) => (props.isBalanced ? '400' : 'black')};
  color: ${(props) => (props.isBalanced ? '#00FF38' : 'black')};
`;

export const StyledWalletData = styled.div``;
