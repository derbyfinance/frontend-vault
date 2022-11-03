import { Portfolio, Rewards, Yield } from '@icons/index';
import React from 'react';
import {
  StyledWalletData,
  StyledWalletHoldings,
  WalletInfoConnectedStyled,
} from './WalletInfoConnected.styled';

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
            <div key={index}>
              {item.icon}
              <p>{item.itemName}</p>
              <p>{item.amount}</p>
            </div>
          );
        })}
      </StyledWalletData>
    </WalletInfoConnectedStyled>
  );
};

export default WalletInfoConnected;
