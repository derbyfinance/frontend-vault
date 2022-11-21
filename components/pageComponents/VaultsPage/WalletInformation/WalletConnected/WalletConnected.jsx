import { EyeOpen } from '@icons/index';
import React from 'react';
import { StyledWalletConnectedContainer } from './WalletConnected.styled';

const WalletConnected = () => {
  return (
    <StyledWalletConnectedContainer>
      <div>
        <div>Wallet Holdings</div>
        <div>
          <EyeOpen />
        </div>
      </div>
      <table>
        <tr>
          <td>Portfolio</td>
          <td>11645</td>
        </tr>
        <tr>
          <td>Yield</td>
          <td>+935,86</td>
        </tr>
      </table>
    </StyledWalletConnectedContainer>
  );
};

export default WalletConnected;
