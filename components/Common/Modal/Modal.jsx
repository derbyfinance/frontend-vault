import React from 'react';
import { StyledModal } from './Modal.styled';
const customStyles = {
  overlay: {
    zIndex: 1000,
    backgroundColor: `${({ theme }) => theme.colors.modalOverlay}`,
    backgroundFilter: 'blur(2px)',
  },
};
const Modal = ({ children, isOpen, onClose }) => {
  return (
    <StyledModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      {children}
    </StyledModal>
  );
};

export default Modal;
