import React from 'react';
import WalletInfo from '../VaultsPage/WalletInformation/WalletInfo';
import PerformanceGraph from './PerformanceGraph/PerformanceGraph';
import SingleVaultDescription from './SingleVaultDescription/SingleVaultDescription';
import SingleVaultInfo from './SingleVaultInfo/SingleVaultInfo';
import {
  StyledChartOption,
  StyledChartOptions,
  StyledChartTitle,
  StyledChartTitleOptions,
  StyledHeaderText,
  StyledPerformanceChart,
  StyledSingleVaultPageWrapper,
  StyledSingleVaultPart,
  StyledVaultInformation,
} from './index.styled';

const description = `Oh no, don't touch that. That's some new specialized weather sensing equipment. 
                    Hey, hey, I've seen this one, I've seen this one. This is a classic, this is 
                    where Ralph dresses up as the man from space. Something wrong with the starter, 
                    so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? 
                    Close the door and beat it. Well, aren't you going up to the lake tonight, you've been 
                    planning it for two weeks.`;

const SingleVaultPageComponent = ({ vaultInfo }) => {
  return (
    <StyledSingleVaultPageWrapper>
      <StyledSingleVaultPart>
        <StyledVaultInformation>
          Vault information {vaultInfo?.toUpperCase()}
        </StyledVaultInformation>
        <StyledHeaderText>
          Technical information regarding the performance of your selected
          vault.
        </StyledHeaderText>
        <SingleVaultDescription description={description} vault={vaultInfo} />
        <SingleVaultInfo />
        <StyledPerformanceChart>
          <StyledChartTitleOptions>
            <StyledChartTitle>
              Historical Performance USDC Vault
            </StyledChartTitle>
            <StyledChartOptions>
              <StyledChartOption>D</StyledChartOption>
              <StyledChartOption>W</StyledChartOption>
              <StyledChartOption>M</StyledChartOption>
              <StyledChartOption>Y</StyledChartOption>
              <StyledChartOption>All Time</StyledChartOption>
            </StyledChartOptions>
          </StyledChartTitleOptions>
          <PerformanceGraph chartData={null} />
        </StyledPerformanceChart>
      </StyledSingleVaultPart>
      <WalletInfo />
    </StyledSingleVaultPageWrapper>
  );
};

export default SingleVaultPageComponent;
