import React, { useEffect, useState } from 'react';
import WalletInfoConnected from './WalletInfoConnected/WalletInfoConnected';
import WalletInfoNotConnected from './WalletInfoNotConnected/WalletInfoNotConnected';
import { useAccount } from 'wagmi';
import WalletConnected from './WalletConnected/WalletConnected';

const WalletInfo = () => {
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState();

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  if (connected) {
    return <WalletConnected />;
  }

  return <WalletInfoNotConnected />;
};

export default WalletInfo;
