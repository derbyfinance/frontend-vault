import React from 'react';
import { StyledModal } from './Modal.styled';
const customStyles = {
  overlay: {
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundFilter: 'blur(2px)',
  },
};
const ModalComponent = ({ children, modalIsOpen, closeModal }) => {
  return (
    <StyledModal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      {children}
    </StyledModal>
  );
};

export default ModalComponent;
