import React, { FC, ReactNode } from 'react';
import { useContext } from 'react';
import close from '@icons/close.svg';
import Image from 'next/image';
import { ThemeContext } from 'styled-components';
import { StyledCloseIcon, StyledModal } from './Modal.styled';

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
      <StyledCloseIcon onClick={onClose}>
        <Image src={close} />
      </StyledCloseIcon>

      {children}
    </StyledModal>
  );
};

export default Modal;
