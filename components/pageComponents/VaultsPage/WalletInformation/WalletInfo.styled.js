import styled from 'styled-components';

export const StyledNotConnectedWrapper = styled.div`
  top: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: sticky;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.gradientWallet};
  padding: 148px 60px 133px;
  border-radius: 6px;
  border: ${({ theme }) => theme.colors.borderMain} 1px solid;
  height: 550px;
  width: 425px;
  @media only screen and (max-width: 1250px) {
    height: 400px;
    padding: 80px 1vh 70px;
  }
`;
export const StyledNotConnectedText = styled.div`
  width: 310px;
`;
export const WalletInfoConnectedStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.backgroundMain};
  font: ${({ theme }) => theme.fonts.slabMedium};
  color: ${({ theme }) => theme.colors.textMain};
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  border-radius: 6px;
  padding: 50px 24px 38px;
  gap: 100px;
  height: 542px;
  width: 425px;
`;

export const StyledConnectedItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${({ theme }) => theme.fonts.robotoRegular};
  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderMain};
  gap: 120px;
  color: ${({ theme }) => theme.colors.textMain};
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
