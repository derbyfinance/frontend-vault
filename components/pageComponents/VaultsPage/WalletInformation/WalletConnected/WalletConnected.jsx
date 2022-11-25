import MainButton from '@components/Common/MainButton/MainButton';
import EyeClosed from '@icons/EyeClosed';
import { EyeOpen, Portfolio, Rewards } from '@icons/index';
import React, { useState } from 'react';
import {
  StyledButtonWrapper,
  StyledConnectedCell,
  StyledConnectedHeading,
  StyledConnectedIcon,
  StyledConnectedRow,
  StyledConnectedTitle,
  StyledConnectedValue,
  StyledConnectedWalletButton,
  StyledHiddenBalance,
  StyledStakeAwardsButton,
  StyledVaultBalance,
  StyledVaultRow,
  StyledVaultTitle,
  StyledWalletConnectedContainer,
  StyledWalletConnectedHeader,
  StyledWalletConnectedTable,
} from './WalletConnected.styled';

const WalletConnected = () => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <StyledWalletConnectedContainer>
      <StyledConnectedHeading>
        <StyledWalletConnectedHeader>
          Wallet holdings
        </StyledWalletConnectedHeader>
        <div onClick={toggleBalance}>
          {showBalance ? <EyeOpen /> : <EyeClosed />}
        </div>
      </StyledConnectedHeading>
      <StyledWalletConnectedTable>
        <StyledConnectedRow>
          <StyledConnectedIcon>
            <Portfolio />
          </StyledConnectedIcon>
          <StyledConnectedTitle>Portfolio</StyledConnectedTitle>
          {showBalance ? (
            <StyledConnectedValue>11645</StyledConnectedValue>
          ) : (
            <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
          )}
        </StyledConnectedRow>
        <StyledVaultRow>
          <StyledConnectedIcon></StyledConnectedIcon>
          <StyledVaultTitle>Balance vault A</StyledVaultTitle>
          {showBalance ? (
            <StyledVaultBalance>7.656</StyledVaultBalance>
          ) : (
            <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
          )}
        </StyledVaultRow>
        <tr>
          <StyledConnectedIcon></StyledConnectedIcon>
          <StyledVaultTitle>Balance vault B</StyledVaultTitle>
          {showBalance ? (
            <StyledVaultBalance>3.989</StyledVaultBalance>
          ) : (
            <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
          )}
        </tr>
        <StyledConnectedRow>
          <StyledConnectedIcon>
            <Rewards />
          </StyledConnectedIcon>
          <StyledConnectedTitle>Portfolio</StyledConnectedTitle>
          {showBalance ? (
            <StyledConnectedValue>11645</StyledConnectedValue>
          ) : (
            <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
          )}
        </StyledConnectedRow>
      </StyledWalletConnectedTable>
      <StyledButtonWrapper>
        <StyledStakeAwardsButton>Stake Rewards</StyledStakeAwardsButton>
      </StyledButtonWrapper>
    </StyledWalletConnectedContainer>
  );
};

export default WalletConnected;
