import React, { useEffect, useState } from 'react';
import WalletInfoConnected from './WalletInfoConnected/WalletInfoConnected';
import WalletInfoNotConnected from './WalletInfoNotConnected/WalletInfoNotConnected';
import { useAccount, useDisconnect } from 'wagmi';
const WalletInfo = () => {
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState();
  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);
  return (
    <div>
      <button onClick={() => disconnect()}>disconnect</button>
      {connected ? <WalletInfoConnected /> : <WalletInfoNotConnected />}
    </div>
  );
};

export default WalletInfo;
