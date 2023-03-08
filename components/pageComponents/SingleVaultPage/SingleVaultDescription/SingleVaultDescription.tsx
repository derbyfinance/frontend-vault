import React, { useState } from 'react';
import { EyeClosed, EyeOpen } from '@icons/index';
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

const SingleVaultDescription = ({ vault, description, imagePath }) => {
  const [descVisible, setDescVisible] = useState(true);

  const toggleHideDescription = () => {
    setDescVisible(!descVisible);
  };

  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionHeader>
        <StyledVault>
          {imagePath !== undefined && (
            <Image
              src={imagePath}
              alt="vault"
              width={40}
              height={40}
            />
          )}
          <StyledVaultTitle>{vault} vault</StyledVaultTitle>
        </StyledVault>
        <StyledHideExplanation onClick={toggleHideDescription}>
          {descVisible ? <EyeOpen /> : <EyeClosed />}
          <StyledHideBtn>
            {descVisible ? 'Hide' : 'Show'} explanation
          </StyledHideBtn>
        </StyledHideExplanation>
      </StyledDescriptionHeader>
      {descVisible && (
        <StyledDescriptionBody>{description}</StyledDescriptionBody>
      )}
    </StyledDescriptionWrapper>
  );
};

export default SingleVaultDescription;
