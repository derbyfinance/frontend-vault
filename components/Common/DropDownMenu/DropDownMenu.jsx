import React, { useState } from 'react';
import { ArrowDown } from '@icons/index';
import {
  StyledDropDownContent,
  StyledDropDownIcon,
  StyledDropDownMenu,
} from './DropDownMenu.styled';

const DropDownMenu = ({ onOpen, onClose, open, children, dropDownButton }) => {
  const toggleMenu = () => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <StyledDropDownMenu>
      <StyledDropDownIcon onClick={toggleMenu}>
        {dropDownButton}
      </StyledDropDownIcon>

      {open && <StyledDropDownContent>{children}</StyledDropDownContent>}
    </StyledDropDownMenu>
  );
};

export default DropDownMenu;
