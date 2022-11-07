import { HideIcon } from '@icons/index';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  StyledDescriptionBody,
  StyledDescriptionHeader,
  StyledDescriptionWrapper,
  StyledHideBtn,
  StyledHideExplanation,
  StyledVault,
  StyledVaultLogo,
  StyledVaultTitle,
} from './SingleVaultDescription.styled';
import USDC from '@images/usdc-single.png';

const SingleVaultDescription = ({ vault, description }) => {
  const [descVisible, setDescVisible] = useState(true);
  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionHeader>
        <StyledVault>
          <StyledVaultLogo>
            <Image src={USDC} />
          </StyledVaultLogo>
          <StyledVaultTitle>{vault}</StyledVaultTitle>
        </StyledVault>
        <StyledHideExplanation
          onClick={() => setDescVisible((descVisible) => !descVisible)}
        >
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
