import React from 'react';
import StyledMainButton from './MainButton.styled';

const MainButton = ({ btnText, onClick }) => {
  return <StyledMainButton onClick={onClick}>{btnText}</StyledMainButton>;
};

export default MainButton;
