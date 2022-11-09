import React, { useEffect, useState } from 'react';
import WalletInfoConnected from './WalletInfoConnected/WalletInfoConnected';
import WalletInfoNotConnected from './WalletInfoNotConnected/WalletInfoNotConnected';
import { useAccount, useDisconnect } from 'wagmi';
import StyledMainButton from '@components/MainButton/MainButton.styled';
const WalletInfo = () => {
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState();
  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);
  return (
    <>
      {connected ? <WalletInfoConnected /> : <WalletInfoNotConnected />}
      {/* <StyledMainButton onClick={() => disconnect()}>
        disconnect
      </StyledMainButton> */}
    </>
  );
};

export default WalletInfo;
