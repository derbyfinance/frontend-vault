import React from 'react';
import StyledMainButton from './MainButton.styled';

const MainButton = ({ btnText, onClick }) => {
  return <StyledMainButton disable={true} onClick={onClick}>{btnText}</StyledMainButton>;
};

export default MainButton;
