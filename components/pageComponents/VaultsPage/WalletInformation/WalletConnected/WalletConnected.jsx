import MainButton from '@components/Common/MainButton/MainButton';
import { EyeOpen, Portfolio, Rewards } from '@icons/index';
import React from 'react';
import {
  StyledConnectedCell,
  StyledConnectedHeading,
  StyledConnectedLogo,
  StyledConnectedTitle,
  StyledConnectedValue,
  StyledWalletConnectedContainer,
} from './WalletConnected.styled';

const WalletConnected = () => {
  return (
    <StyledWalletConnectedContainer>
      <StyledConnectedHeading>
        <div>Wallet Holdings</div>
        <div>
          <EyeOpen />
        </div>
      </StyledConnectedHeading>
      <table>
        <tr>
          <StyledConnectedLogo>
            <Portfolio />
          </StyledConnectedLogo>
          <StyledConnectedTitle>Portfolio</StyledConnectedTitle>
          <StyledConnectedValue>11645</StyledConnectedValue>
        </tr>
        <tr>
          <StyledConnectedLogo></StyledConnectedLogo>
          <StyledConnectedTitle>Balance vault A</StyledConnectedTitle>
          <StyledConnectedValue>7.656</StyledConnectedValue>
        </tr>
        <tr>
          <StyledConnectedLogo></StyledConnectedLogo>
          <StyledConnectedTitle>Balance vault B</StyledConnectedTitle>
          <StyledConnectedValue>3.989</StyledConnectedValue>
        </tr>
        <tr>
          <StyledConnectedLogo>
            <Rewards />
          </StyledConnectedLogo>
          <StyledConnectedTitle>Portfolio</StyledConnectedTitle>
          <StyledConnectedValue>11645</StyledConnectedValue>
        </tr>
      </table>
      <div>
        <MainButton btnText="Stake Rewards" />
      </div>
    </StyledWalletConnectedContainer>
  );
};

export default WalletConnected;
