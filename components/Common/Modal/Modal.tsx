import React, { FC, ReactNode } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledModal } from './Modal.styled';

type ModalType = {
  children: ReactNode;
  isOpen: boolean;
  onClose: Function;
};

const Modal: FC<ModalType> = ({ children, isOpen, onClose }) => {
  const themeContext: any = useContext(ThemeContext);

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
