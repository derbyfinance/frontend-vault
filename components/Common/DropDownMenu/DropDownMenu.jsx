import React, { useState } from 'react';
import { ArrowDown } from '@icons/index';
import {
  StyledDropDownContent,
  StyledDropDownIcon,
  StyledDropDownMenu,
} from './DropDownMenu.styled';

const DropDownMenu = ({ children, dropDownButton = <ArrowDown /> }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
    console.log('Clicked on the arrow in DropDownMenu');
  };

  return (
    <StyledDropDownMenu>
      <StyledDropDownIcon
        isContentVisible={isContentVisible}
        onClick={toggleContentVisibility}
      >
        {dropDownButton}
      </StyledDropDownIcon>

      {isContentVisible && (
        <StyledDropDownContent isContentVisible={isContentVisible}>
          {children}
        </StyledDropDownContent>
      )}
    </StyledDropDownMenu>
  );
};

export default DropDownMenu;
