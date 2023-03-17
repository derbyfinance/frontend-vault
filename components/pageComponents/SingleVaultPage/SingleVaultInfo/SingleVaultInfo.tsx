import React, { useEffect, useState } from 'react';
import { addSeparators } from '@helpers/helperFunctions';
import arrowUp from '@images/singleVaultIcons/arrowUp.svg';
import locked from '@images/singleVaultIcons/locked.svg';
import priceIcon from '@images/singleVaultIcons/price.svg';
import yieldIcon from '@images/singleVaultIcons/yield.svg';
import Image from 'next/image';
import {
  StyledBlockDescription,
  StyledBlockInfo,
  StyledBlockWrapper,
  StyledChangeLabel,
  StyledRotate,
  StyledSingleVaultInfoContainer,
  StyledTextPart,
  StyledValue,
  StyledValueAndChange,
} from './SingleVaultInfo.styled';

const ArrowDown = () => {
  return (
    <StyledRotate>
      {' '}
      <Image src={arrowUp} alt={'arrow'} />
    </StyledRotate>
  );
};

const SingleVaultInfo = ({ vaultStats }) => {
  const [price, setPrice] = useState(0);
  const [apy, setAPY] = useState(0);
  const [tvl, setTVl] = useState(0);
  const [priceChange, setPriceChange] = useState<any>();
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    if (vaultStats.prices !== undefined) {
      const prices = vaultStats.prices[vaultStats.prices.length - 1];
      const apys = vaultStats.apy[vaultStats.apy.length - 1];
      const tvls = vaultStats.tvl[vaultStats.tvl.length - 1];
      setPrice(prices);
      setAPY(apys);
      setTVl(addSeparators(tvls / 1e6));
      setPriceChange(
        (
          (vaultStats?.prices[vaultStats.prices.length - 1] -
            vaultStats?.prices[vaultStats.prices.length - 2]) /
          100
        ).toFixed(3),
      );
      if (
        vaultStats.prices[vaultStats.prices.length - 1] <
        vaultStats.prices[vaultStats.prices.length - 2]
      ) {
        setIsPositive(false);
      } else {
        setIsPositive(true);
      }
    }
  }, [vaultStats]);

  const dataToShow = [
    {
      icon: priceIcon,
      value: `$ ${price}`,
      priceChange: `${priceChange}%`,
      positive: isPositive,
      description: 'Price',
    },
    {
      icon: yieldIcon,
      value: `$ ${apy}`,
      description: 'Annual Percentage Yield',
    },
    {
      icon: locked,
      value: `${tvl} M`,
      description: 'Total Value Locked',
    },
  ];

  return (
    <StyledSingleVaultInfoContainer>
      {dataToShow.map((el, index) => (
        <StyledBlockWrapper key={index}>
          <StyledBlockInfo>
            <Image src={el.icon} alt={'coin'} />
            <StyledTextPart>
              <StyledValueAndChange>
                <StyledValue>{el.value}</StyledValue>
                {el.priceChange ? (
                  <StyledChangeLabel positive={el.positive}>
                    <div>{el.priceChange}</div>
                    {el.positive ? (
                      <Image
                        src={el.positive ? arrowUp : arrowUp}
                        alt={'arrow'}
                      />
                    ) : (
                      <ArrowDown />
                    )}
                  </StyledChangeLabel>
                ) : (
                  ''
                )}
              </StyledValueAndChange>
              <StyledBlockDescription>{el.description}</StyledBlockDescription>
            </StyledTextPart>
          </StyledBlockInfo>
        </StyledBlockWrapper>
      ))}
    </StyledSingleVaultInfoContainer>
  );
};

export default SingleVaultInfo;
