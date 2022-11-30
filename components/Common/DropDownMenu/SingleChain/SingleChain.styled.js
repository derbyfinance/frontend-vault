import styled from 'styled-components';

export const StyledSingleChainContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  &:last-child {
    border-bottom: none;
  }
`;
