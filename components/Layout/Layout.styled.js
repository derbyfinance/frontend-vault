import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors.backgroundMain};
  margin: 0 auto;
  // overflow: hidden;

  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;

export const ContainerWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto
`;

