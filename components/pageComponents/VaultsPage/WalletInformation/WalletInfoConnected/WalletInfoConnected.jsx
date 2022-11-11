import { ClaimRewards } from '@components/MainButton/MainButton.styled';
import { Portfolio, Rewards, Yield } from '@icons/index';
import React from 'react';
import {
  StyledAmountConnected,
  StyledConnectedItem,
  StyledConnectedLeftWrapper,
  StyledWalletHoldings,
  WalletInfoConnectedStyled,
} from '../WalletInfo.styled';
//mock temporary data
const walletAmount = 1000;
const mockData = {
  portfolioAmount: 11645,
  yieldAmount: '+935,86',
  rewardsAmount: 11645,
};
const WalletInfoConnectedRow = ({ icon, title, amount }) => {
  return (
    <StyledConnectedItem>
      <StyledConnectedLeftWrapper>
        {icon}
        {title}
      </StyledConnectedLeftWrapper>
      <StyledAmountConnected isBalanced={title === 'Yield'}>
        {amount}
      </StyledAmountConnected>
    </StyledConnectedItem>
  );
};
const WalletInfoConnected = () => {
  const { portfolioAmount, yieldAmount, rewardsAmount } = mockData;
  return (
    <WalletInfoConnectedStyled>
      <StyledWalletHoldings>
        Wallet Holdings <span>{walletAmount}</span>
      </StyledWalletHoldings>
      <div>
        <WalletInfoConnectedRow
          icon={<Portfolio />}
          title={'Portfolio'}
          amount={portfolioAmount}
        />
        <WalletInfoConnectedRow
          icon={<Yield />}
          title={'Yield'}
          amount={yieldAmount}
        />
        <WalletInfoConnectedRow
          icon={<Rewards />}
          title={'Rewards'}
          amount={rewardsAmount}
        />
      </div>
      <ClaimRewards>Claim Rewards</ClaimRewards>
    </WalletInfoConnectedStyled>
  );
};
export default WalletInfoConnected;
