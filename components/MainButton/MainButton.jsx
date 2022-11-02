import React from 'react';
import StyledMainButton from './MainButton.styled';

const MainButton = ({ btnText, openModal }) => {
  return <StyledMainButton onClick={openModal}>{btnText}</StyledMainButton>;
};

export default MainButton;
