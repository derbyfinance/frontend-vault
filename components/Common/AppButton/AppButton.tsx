import React from 'react';
import StyledAppButton from './AppButton.styled';

const AppButton = ({ btnText, onClick, disable }) => {

  return <StyledAppButton disabled={disable} onClick={onClick}>{btnText}</StyledAppButton>;
};

export default AppButton;
