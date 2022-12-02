import React, { useState } from 'react';
import Image from 'next/image';
import {
  StyledDescriptionBody,
  StyledDescriptionHeader,
  StyledDescriptionWrapper,
  StyledHideBtn,
  StyledHideExplanation,
  StyledVault,
  StyledVaultTitle,
} from './SingleVaultDescription.styled';
import { HideIcon } from '@icons/index';
import USDC from '@images/usdc-single.png';

const SingleVaultDescription = ({ vault, description }) => {
  const [descVisible, setDescVisible] = useState(true);

  const toggleHideDescription = () => {
    setDescVisible(!descVisible)
  }

  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionHeader>
        <StyledVault>
          <Image src={USDC} alt='vault' />
          <StyledVaultTitle>{vault}</StyledVaultTitle>
        </StyledVault>
        <StyledHideExplanation onClick={toggleHideDescription}>
          <HideIcon />
          <StyledHideBtn>Hide explanation</StyledHideBtn>
        </StyledHideExplanation>
      </StyledDescriptionHeader>
      {descVisible && (
        <StyledDescriptionBody>{description}</StyledDescriptionBody>
      )}
    </StyledDescriptionWrapper>
  );
};

export default SingleVaultDescription;
