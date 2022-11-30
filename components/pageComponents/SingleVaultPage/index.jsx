import BreadCrumbs from '@components/BreadCrumbs/BreadCrumbs';
import React from 'react';
import WalletInfo from '../VaultsPage/WalletInformation/WalletInfo';
import {
  StyledSingleVaultPart,
  StyledSingleVaultPageWrapper,
  StyledHeaderText,
} from './index.styled';
import SingleVaultDescription from './SingleVaultDescription/SingleVaultDescription';
const desc = `Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.`;
const vault = `USDC Vault`;

const SingleVaultPageComponent = ({ vaultInfo }) => {
  return (
    <StyledSingleVaultPageWrapper>
      <StyledSingleVaultPart>
        <BreadCrumbs />
        <StyledHeaderText>
          Technical information regarding the performance of your selected
          vault.
        </StyledHeaderText>
        <SingleVaultDescription description={desc} vault={vault} />
      </StyledSingleVaultPart>
      <WalletInfo />
    </StyledSingleVaultPageWrapper>
  );
};

export default SingleVaultPageComponent;