import Image from 'next/image';
import React from 'react';
import price from '@images/singleVaultIcons/price.svg';
import yieldIcon from '@images/singleVaultIcons/yield.svg';
import locked from '@images/singleVaultIcons/locked.svg';
import arrowUp from '@images/singleVaultIcons/arrowUp.svg';

import {
    StyledBlockDescription,
    StyledBlockInfo,
    StyledBlockWrapper,
    StyledChangeLabel,
    StyledSingleVaultInfoContainer,
    StyledTextPart,
    StyledValue,
    StyledValueAndChange
} from './SingleVaultInfo.styled'

const dataToShow = [
    {
        icon: price,
        value: '$ 154.74',
        priceChange: '1.29%',
        positive: true,
        description: 'Price'
    },
    {
        icon: yieldIcon,
        value: '6.32',
        description: 'Annual Percentage Yield'
    },
    {
        icon: locked,
        value: '9.90 M',
        description: 'Total Value Locked'
    }
]

const SingleVaultInfo = () => {
    return (
        <StyledSingleVaultInfoContainer>
            {
                dataToShow.map((el, index) => (
                    <StyledBlockWrapper key={index}>
                        <StyledBlockInfo>
                            <Image src={el.icon} />
                            <StyledTextPart>
                                <StyledValueAndChange>
                                    <StyledValue>{el.value}</StyledValue>
                                    {el.priceChange ? (
                                        <StyledChangeLabel positive={el.positive}>
                                            <div>{el.priceChange}</div>
                                            <Image src={el.positive ? arrowUp : ''} />
                                        </StyledChangeLabel>
                                    ) : ''}
                                </StyledValueAndChange>
                                <StyledBlockDescription>{el.description}</StyledBlockDescription>
                            </StyledTextPart>
                        </StyledBlockInfo>
                    </StyledBlockWrapper>
                ))
            }

        </StyledSingleVaultInfoContainer>
    )
}

export default SingleVaultInfo