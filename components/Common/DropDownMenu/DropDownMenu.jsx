import React, { useState } from 'react';
import { ArrowDown } from '@icons/index';
import {
  StyledDropDownContent,
  StyledDropDownIcon,
  StyledDropDownMenu,
} from './DropDownMenu.styled';

const DropDownMenu = ({
  children,
  dropDownButton = <ArrowDown />,
  open,
  setOpen,
}) => {
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <StyledDropDownMenu>
      <StyledDropDownIcon isOpen={open} onClick={toggleMenu}>
        {dropDownButton}
      </StyledDropDownIcon>

      {open && <StyledDropDownContent>{children}</StyledDropDownContent>}
    </StyledDropDownMenu>
  );
};

export default DropDownMenu;
