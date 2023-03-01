import styled from 'styled-components';

export const StyledVaultsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 19px;
`;

export const StyledCoinsPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const StyledTableWrapper= styled.div`
  display: flex;
  margin: 60px 0 0 0;
  gap: 17px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

