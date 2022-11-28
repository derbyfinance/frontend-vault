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

  const handleStakeRewards = () => {};

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
        <tbody>
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
          <StyledVaultRow>
            <StyledConnectedIcon></StyledConnectedIcon>
            <StyledVaultTitle>Balance vault B</StyledVaultTitle>
            {showBalance ? (
              <StyledVaultBalance>3.989</StyledVaultBalance>
            ) : (
              <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
            )}
          </StyledVaultRow>
          <StyledConnectedRow>
            <StyledConnectedIcon>
              <Rewards />
            </StyledConnectedIcon>
            <StyledConnectedTitle>Rewards</StyledConnectedTitle>
            {showBalance ? (
              <StyledConnectedValue>11645</StyledConnectedValue>
            ) : (
              <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
            )}
          </StyledConnectedRow>
        </tbody>
      </StyledWalletConnectedTable>
      <StyledButtonWrapper>
        <StyledStakeAwardsButton onClick={handleStakeRewards}>
          Stake Rewards
        </StyledStakeAwardsButton>
      </StyledButtonWrapper>
    </StyledWalletConnectedContainer>
  );
};

export default WalletConnected;
