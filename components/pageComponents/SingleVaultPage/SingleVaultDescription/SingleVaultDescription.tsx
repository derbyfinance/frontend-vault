import React, { useState } from 'react';
import Image from 'next/image';
import { EyeClosed, EyeOpen } from '@icons/index';
import USDC from '@images/usdc-single.svg';
import {
    StyledDescriptionBody,
    StyledDescriptionHeader,
    StyledDescriptionWrapper,
    StyledHideBtn,
    StyledHideExplanation,
    StyledVault,
    StyledVaultTitle
} from './SingleVaultDescription.styled';

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
                    <StyledVaultTitle>{vault} vault</StyledVaultTitle>
                </StyledVault>
                <StyledHideExplanation onClick={toggleHideDescription}>
                    {descVisible ? <EyeOpen /> : <EyeClosed />}
                    <StyledHideBtn>{descVisible ? 'Hide' : 'Show'} explanation</StyledHideBtn>
                </StyledHideExplanation>
            </StyledDescriptionHeader>
            {descVisible && (
                <StyledDescriptionBody>{description}</StyledDescriptionBody>
            )}
        </StyledDescriptionWrapper>
    );
};

export default SingleVaultDescription;