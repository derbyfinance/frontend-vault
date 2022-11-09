import React from 'react';
import WalletInfoConnected from './WalletInfoConnected/WalletInfoConnected';
import WalletInfoNotConnected from './WalletInfoNotConnected/WalletInfoNotConnected';
import { useAccount, useDisconnect } from 'wagmi';
const WalletInfo = () => {
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  return (
    <div>
      <button onClick={() => disconnect()}>disconnect</button>
      {isConnected ? <WalletInfoConnected /> : <WalletInfoNotConnected />}
    </div>
  );
};

export default WalletInfo;
