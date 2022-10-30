import styled from 'styled-components';

export const StyledWalletInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: 16px;
  gap: 35px;
  color: white;
  max-width: 427px;
  background: ${({ theme }) => theme.gradientWallet};
  border: 2px solid ${({ theme }) => theme.borderMain};
  border-radius: 6px;
  padding: 140px 50px;
`;
