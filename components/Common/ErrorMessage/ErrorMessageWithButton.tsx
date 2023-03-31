import React from 'react';
import Image from 'next/image';
import error from 'public/images/error.svg';
import {
  StyledButtonMessage,
  StyledErrorContainer,
  StyledErrorMessage,
  StyledErrorWrapper,
} from './ErrorMessage.styled';

const ErrorMessageWithButton = ({
  message,
  buttonMessage,
  errorMessageClickHandler,
}) => {
  return (
    <StyledErrorContainer>
      <StyledErrorWrapper>
        <Image src={error} alt="error" />
        <StyledErrorMessage>{message}</StyledErrorMessage>
        <StyledButtonMessage onClick={errorMessageClickHandler}>
          {buttonMessage}
        </StyledButtonMessage>
      </StyledErrorWrapper>
    </StyledErrorContainer>
  );
};

export default ErrorMessageWithButton;
