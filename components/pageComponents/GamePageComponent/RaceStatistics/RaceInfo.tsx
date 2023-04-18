import WalletInfoNotConnected from '@components/pageComponents/VaultsPage/WalletInformation/WalletInfoNotConnected/WalletInfoNotConnected';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import RaceStatisticsComponent from './RaceStatisticsComponent';

const RaceInfo: FC = () => {
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState<boolean>();

  useLayoutEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  if (connected) {
    return <RaceStatisticsComponent />;
  }

  return <WalletInfoNotConnected />;
};

export default RaceInfo;
