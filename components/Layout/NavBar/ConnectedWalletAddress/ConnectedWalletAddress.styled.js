import styled from 'styled-components';

export const StyledAddressWrapper = styled.div`
  font: ${({ theme }) => theme.fonts.robotoBold};
  font-size: 16px;
`;

export const StyledWalletMenuContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.tabDepositWithdrawActive};
`;
