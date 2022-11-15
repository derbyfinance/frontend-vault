import styled from 'styled-components';

const StyledMainButton = styled.button`
  background: ${({ theme }) => theme.colors.gradientMain};
  border-radius: 6px;
  padding: 12px 20px;
  font: ${({ theme }) => theme.font.slabMedium};
  font-size: 20px;

  cursor: pointer;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.textSecondary};
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
  color: ${({ theme }) => theme.colors.textMain};
  border-radius: 6px;
  padding: 10px 20px;
`;

export default StyledMainButton;
