import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  width: 423px;
  height: 653px;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: fixed;
  border-radius: 28px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding: 54px 0;
`;

export const StyledModalLogoAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledModalConnectOptions = styled.div`
  display: flex;
  flex-direction: column;
`;
