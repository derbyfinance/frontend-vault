import styled from 'styled-components';

export const StyledConnectVia = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 18px;
  padding: 0 0 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color?.borderMain};
  &:last-child {
    border-bottom: none;
  }
`;

export const StyledConnectLeftContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
