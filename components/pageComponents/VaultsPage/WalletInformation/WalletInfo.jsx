import React, { useEffect, useState } from 'react';
import WalletInfoConnected from './WalletInfoConnected/WalletInfoConnected';
import WalletInfoNotConnected from './WalletInfoNotConnected/WalletInfoNotConnected';
import { useAccount } from 'wagmi';

const WalletInfo = () => {
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState();

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  if (connected) {
    return <WalletInfoConnected />;
  }

  return <WalletInfoNotConnected />;
};

export default WalletInfo;
