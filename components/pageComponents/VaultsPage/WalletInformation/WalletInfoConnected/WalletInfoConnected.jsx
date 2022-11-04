import { ClaimRewards } from '@components/MainButton/MainButton.styled';
import { Portfolio, Rewards, Yield } from '@icons/index';
import React from 'react';
import {
  StyledConnectedItem,
  StyledConnectedLeftWrapper,
  StyledWalletData,
  StyledWalletHoldings,
  WalletInfoConnectedStyled,
} from '../WalletInfo.styled';

const WalletInfoConnected = () => {
  const walletAmount = 1000;
  const dummyData = [
    { icon: <Portfolio />, itemName: 'Portfolio', amount: 11645 },
    { icon: <Yield />, itemName: 'Yield', amount: '+935,85' },
    { icon: <Rewards />, itemName: 'Rewards', amount: 11645 },
  ];
  return (
    <WalletInfoConnectedStyled>
      <StyledWalletHoldings>
        <div>Wallet Holdings</div> <div>{walletAmount}</div>
      </StyledWalletHoldings>
      <StyledWalletData>
        {dummyData.map((item, index) => {
          return (
            <StyledConnectedItem key={index}>
              <StyledConnectedLeftWrapper>
                {item.icon}
                <p>{item.itemName}</p>
              </StyledConnectedLeftWrapper>
              <p>{item.amount}</p>
            </StyledConnectedItem>
          );
        })}
      </StyledWalletData>
      <ClaimRewards>Claim Rewards</ClaimRewards>
    </WalletInfoConnectedStyled>
  );
};

export default WalletInfoConnected;
