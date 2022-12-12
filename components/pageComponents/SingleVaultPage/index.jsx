import React from 'react';
import WalletInfo from '../VaultsPage/WalletInformation/WalletInfo';
import {
  StyledSingleVaultPart,
  StyledSingleVaultPageWrapper,
  StyledHeaderText,
  StyledVaultInformation,
} from './index.styled';
import SingleVaultDescription from './SingleVaultDescription/SingleVaultDescription';
import { vault, vaultDescription } from 'Constants/mockData'
import SingleVaultInfo from './SingleVaultInfo/SingleVaultInfo';

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
        <SingleVaultDescription description={vaultDescription} vault={vault} />
        <SingleVaultInfo />
      </StyledSingleVaultPart>
      <WalletInfo />
    </StyledSingleVaultPageWrapper>
  );
};

export default SingleVaultPageComponent;
