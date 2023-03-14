import React, { FC, useEffect, useState } from 'react';
import { addSeparatorsToThousands } from '@helpers/helperFunctions';
import EyeClosed from '@icons/EyeClosed';
import { EyeOpen, Portfolio, Rewards } from '@icons/index';
import { ApiService } from 'services/api.service';
import { useAccount } from 'wagmi';
import {
  StyledButtonWrapper,
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

const WalletConnected: FC = () => {
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [rewards, setRewards] = useState();
  const [portfolio, setPortfolio] = useState();
  const [balanceVaultA, setBalanceVaultA] = useState();
  const [balanceVaultB, setBalanceVaultB] = useState();

  const { address } = useAccount();

  const toggleBalance = (): void => {
    setShowBalance(!showBalance);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await ApiService.getUserDataByUserAddress(address);
      const data = response.data.data;
      setRewards(data.rewards);
      setPortfolio(data.portfolio);
      setBalanceVaultA(data.balances.vaultUSDC);
      setBalanceVaultB(data.balances.vaultDAI);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStakeRewards = (): void => {};

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
              <StyledConnectedValue>
                ${addSeparatorsToThousands(portfolio)}
              </StyledConnectedValue>
            ) : (
              <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
            )}
          </StyledConnectedRow>
          <StyledVaultRow>
            <StyledConnectedIcon></StyledConnectedIcon>
            <StyledVaultTitle>Balance vault A</StyledVaultTitle>
            {showBalance ? (
              <StyledVaultBalance>
                ${addSeparatorsToThousands(balanceVaultA)}
              </StyledVaultBalance>
            ) : (
              <StyledHiddenBalance>XXXXX</StyledHiddenBalance>
            )}
          </StyledVaultRow>
          <StyledVaultRow>
            <StyledConnectedIcon></StyledConnectedIcon>
            <StyledVaultTitle>Balance vault B</StyledVaultTitle>
            {showBalance ? (
              <StyledVaultBalance>
                ${addSeparatorsToThousands(balanceVaultB)}
              </StyledVaultBalance>
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
              <StyledConnectedValue>
                ${addSeparatorsToThousands(rewards)}
              </StyledConnectedValue>
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
