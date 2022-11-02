import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 64px;
  padding: 0 64px;
  min-height: 100vh;
  max-width: 1440px;
  background: ${(props) => props.theme.backgroundMain};
`;

export const StyledWavesTop = styled.div`
  width: 579px;
  height: 836px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledWavesBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const StyledLayoutContainer = styled.div`
  width: 100%;
  position: relative;
`;
