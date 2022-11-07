import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  width: 423px;
  height: 653px;
  padding: 50px 32px;
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
`;

export const StyledModalLogoAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h3 {
    line-height: 23px;
    font-size: 20px;
    font-family: Roboto-Medium;
    font-weight: 500;
    color: ${({ theme }) => theme.textTertiary};
  }
  & h4 {
    font-family: 'Roboto-Light';
    font-weight: 300;
  }
`;

export const StyledModalConnectOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
