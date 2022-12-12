import React, { useState } from 'react';
import Image from 'next/image';
import { HideIcon } from '@icons/index';
import USDC from '@images/usdc-single.svg';
import { StyledDescriptionBody, StyledDescriptionHeader, StyledDescriptionWrapper, StyledHideBtn, StyledHideExplanation, StyledVault, StyledVaultTitle } from './SingleVaultDescription.styled';

const vaultDescription = `Oh no, don't touch that. That's some new specialized weather sensing equipment. 
                          Hey, hey, I've seen this one, I've seen this one. This is a classic, this is 
                          where Ralph dresses up as the man from space. Something wrong with the starter, 
                          so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? 
                          Close the door and beat it. Well, aren't you going up to the lake tonight, you've been 
                          planning it for two weeks.`;

const SingleVaultDescription = ({ vault }) => {
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
                    <HideIcon />
                    <StyledHideBtn>{descVisible ? 'Hide' : 'Show'} explanation</StyledHideBtn>
                </StyledHideExplanation>
            </StyledDescriptionHeader>
            {descVisible && (
                <StyledDescriptionBody>{vaultDescription}</StyledDescriptionBody>
            )}
        </StyledDescriptionWrapper>
    );
};

export default SingleVaultDescription;