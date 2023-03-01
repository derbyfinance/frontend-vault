import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 64px;
  min-height: 100vh;
  // width: 1440px;
  background: ${({ theme }) => theme?.colors.backgroundMain};
  margin: 0 auto;
  // overflow: hidden;
`;

export const ContainerWrapper = styled.div`
  width: 1250px;
  display: block;
  margin-left: auto;
  margin-right: auto
`;
