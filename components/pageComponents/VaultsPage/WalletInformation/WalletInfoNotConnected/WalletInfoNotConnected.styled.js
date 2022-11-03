import styled from 'styled-components';

export const StyledNotConnectedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: 16px;
  gap: 50px;
  padding: 140px 50px;
  color: ${(props) => props.theme.textSecondary};
  background: ${({ theme }) => theme.gradientWallet};
`;
