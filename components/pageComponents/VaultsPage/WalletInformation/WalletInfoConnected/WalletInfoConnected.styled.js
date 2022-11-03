import styled from 'styled-components';

export const WalletInfoConnectedStyled = styled.div`
  background: ${({ theme }) => theme.backgroundMain};
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.textWalletInfo};
  top: 20px;
`;

export const StyledWalletHoldings = styled.div`
  display: flex;
  gap: 200px;
  & > div {
    white-space: nowrap;
  }
`;

export const StyledWalletData = styled.div``;
