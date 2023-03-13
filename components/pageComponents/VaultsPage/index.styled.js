import styled from 'styled-components';

export const StyledVaultsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 19px;
  margin: 0 24px;
`;

export const StyledCoinsPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTableWrapper= styled.div`
  display: flex;
  gap: 17px;

  @media only screen and (max-width: ${({ isConnected }) => (isConnected ? '1250px' : '1109px')}) {
    flex-direction: column;
    margin: 0 0 0 0;
  }
`;
