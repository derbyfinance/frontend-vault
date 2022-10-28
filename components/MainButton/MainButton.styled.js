import styled from 'styled-components';

const StyledMainButton = styled.button`
  background: ${({ theme }) => theme.gradientMain};
  border-radius: 6px;
  padding: 12px 20px;
  font-family: Slab-Medium;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textSecondary};
`;

export const ConnectYourWallet = styled(StyledMainButton)`
  background: ${({ theme }) => theme.buttonMain};
`;

export const AddMoneyToVaultBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.borderSecondary};
  border-radius: 6px;
  padding: 10px 20px;
`;

export default StyledMainButton;
