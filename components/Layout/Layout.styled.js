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


export const StyledContainerWrapper = styled.div`
display: flex;
gap: 17px;

@media only screen and (max-width: 1250px) {
  width:720px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
}
`;