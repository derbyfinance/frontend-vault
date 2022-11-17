import React from 'react';
import { StyledModal } from './Modal.styled';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Modal = ({ children, isOpen, onClose }) => {
  const themeContext = useContext(ThemeContext);

  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: themeContext.colors.modalOverlay,
      backgroundFilter: 'blur(2px)',
    },
  };

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
