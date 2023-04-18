import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import WalletInfoNotConnected from './WalletInfoNotConnected/WalletInfoNotConnected';
import { useAccount } from 'wagmi';
import WalletConnected from './WalletConnected/WalletConnected';

const WalletInfo: FC = () => {
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState<boolean>();

  useLayoutEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  if (connected) {
    return <WalletConnected />;
  }

  return <WalletInfoNotConnected />;
};

export default WalletInfo;
