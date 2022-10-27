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
  background: #39079b;
`;

export const AddMoneyToVaultBtn = styled.button`
  border: 1px solid #160344;
  border-radius: 6px;
  padding: 10px 20px;
`;

export default StyledMainButton;
