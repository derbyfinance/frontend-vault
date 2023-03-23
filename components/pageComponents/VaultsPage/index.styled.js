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

  @media only screen and (max-width: 1250px) {
    flex-direction: column;
    align-items:center;
    margin: 0 0 0 0;
  }
`;
