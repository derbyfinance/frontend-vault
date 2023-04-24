import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLoader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid purple;
  border-right: 2px solid purple;
  border-bottom: 2px solid purple;
  border-left: 4px solid purple;
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position:absolute;
  top:50%;
`;

export default AppLoader;
