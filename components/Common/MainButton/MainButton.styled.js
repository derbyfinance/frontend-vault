import styled from 'styled-components';

const StyledMainButton = styled.button`
  background: ${({ theme }) => theme.colors.gradientMain};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  padding: 12px 20px;
  font: 'Slab-Medium';
  font-size: 16px;
  cursor: pointer;
  font-family: 'Roboto-Bold';
  border: none;
  outline: none;
  min-width: 208px;
`;

export const ConnectYourWallet = styled(StyledMainButton)`
  background: ${({ theme }) => theme.colors.buttonMain};
`;

export const ClaimRewards = styled(StyledMainButton)`
  padding: 18px 58px;
  background: ${({ theme }) => theme.colors.buttonMain};
`;

export const AddMoneyToVaultBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.borderSecondary};
  background-color: transparent;
  font-family: 'Slab-Medium';
  color: ${({ theme }) => theme.colors.textMain};
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    opacity:0.6;
  }
`;

export default StyledMainButton;
