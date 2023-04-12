import React, { useEffect, useState } from 'react';
import deleteIcon from '@icons/deleteIcon.svg';
import updateIcon from '@icons/updateIcon.svg';
import iconCoin from '@icons/yearn-finance-yfi-logo.svg';
import ETH from '@images/ETH.svg';
import Image from 'next/image';
import {
  StyleIcon,
  StyleIconsContainer,
  StyleItemContainer,
  StyleItemName,
  StyleItemPrice,
  StyleItemTools,
  StyleItemWrapper,
  StyleToolIcon,
} from './SummaryComponent.styled';

const ItemContainer = ({
  name,
  network,
  price,
  id,
  deleteVault,
  updateVault,
  summaryPrice,
}) => {
  return (
    <StyleItemContainer>
      <StyleItemWrapper>
        <StyleIconsContainer>
          <Image width={32} src={iconCoin} alt={'iconCoin'} />
          <StyleIcon>
            <Image width={30} src={ETH} alt={'ETH'} />
          </StyleIcon>
        </StyleIconsContainer>
        <StyleItemName>
          <div>{name}</div>
          <span>{network}</span>
        </StyleItemName>
      </StyleItemWrapper>
      <StyleItemTools>
        <StyleItemPrice>
          <div>{price}</div>
          <span>DRB</span>
        </StyleItemPrice>
        <StyleItemPrice>
          <div>{((price / summaryPrice) * 100).toFixed(1)}</div>
          <span>%</span>
        </StyleItemPrice>
        <StyleToolIcon>
          <Image
            onClick={() => deleteVault(id)}
            src={deleteIcon}
            alt={'deleteIcon'}
          />
        </StyleToolIcon>
        <StyleToolIcon>
          <Image
            onClick={() => updateVault(id)}
            src={updateIcon}
            alt={'updateIcon'}
          />
        </StyleToolIcon>
      </StyleItemTools>
    </StyleItemContainer>
  );
};
export default ItemContainer;
