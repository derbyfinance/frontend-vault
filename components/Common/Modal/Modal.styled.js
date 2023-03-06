import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  padding: 50px 32px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 28px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
  color: #000;
  max-width: 420px;
`;

export const StyledModalLogoAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 58px;
  & h3 {
    font: ${({ theme }) => theme.fonts.robotoMedium};
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
  & h4 {
    font: ${({ theme }) => theme.fonts.robotoLight};
    font-size: 16px;
  }
`;

export const StyledModalConnectOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledCloseIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
