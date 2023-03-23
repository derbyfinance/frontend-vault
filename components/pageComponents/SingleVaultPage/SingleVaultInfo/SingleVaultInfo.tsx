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

const SingleVaultInfo = ({ vaultStats, setDataForGraphHandler }) => {
  const [price, setPrice] = useState(0);
  const [apy, setAPY] = useState(0);
  const [tvl, setTVl] = useState(0);
  const [priceChange, setPriceChange] = useState<any>();
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    let vaultStatsLastEl = vaultStats[vaultStats.length - 1];

    if (vaultStatsLastEl !== undefined) {
      setPrice(vaultStatsLastEl.price);
      setAPY(vaultStatsLastEl.apy);
      setTVl(addSeparators(vaultStatsLastEl.tvl / 1e6));
      setPriceChange(
        (
          (vaultStatsLastEl.price - vaultStats[vaultStats.length - 2].price) /
          100
        ).toFixed(3),
      );
      if (vaultStatsLastEl < vaultStats[vaultStats.length - 2]) {
        setIsPositive(false);
      } else {
        setIsPositive(true);
      }
    }
  }, [vaultStats]);

  const dataToShow = [
    {
      id: 'price',
      icon: priceIcon,
      value: `$ ${price}`,
      priceChange: `${priceChange}%`,
      positive: isPositive,
      description: 'Price',
    },
    {
      id: 'apy',
      icon: yieldIcon,
      value: `$ ${apy}`,
      description: 'Annual Percentage Yield',
    },
    {
      id: 'tvl',
      icon: locked,
      value: `${tvl} M`,
      description: 'Total Value Locked',
    },
  ];

  return (
    <StyledSingleVaultInfoContainer>
      {dataToShow.map((el, index) => (
        <StyledBlockWrapper
          key={index}
          onClick={() => setDataForGraphHandler(el.id)}
        >
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
