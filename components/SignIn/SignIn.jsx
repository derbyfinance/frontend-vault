import { useState } from 'react';
import ErrorMessage from '@components/UI/ErrorMessage';
import { Coinbase, MetaMask, WalletConnect } from '@icons/index';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import ConnectVia from './ConnectVia/ConnectVia';
import { SignInContainer } from './SignIn.styled';

const SignIn = ({ closeModal }) => {
  const { connectors, connectAsync } = useConnect();
  const { disconnectAsync, disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();
  const [walletIsDetected, setWalletIsDetected] = useState(true);

  const connectWallet = async (connector) => {
    try {
      if (isConnected) {
        await disconnectAsync();
      }
      const userData = { network: 'evm' };
      const { account, chain } = await connectAsync({ connector });
      userData.address = account;
      userData.chain = chain.id;

      const { data } = await axios.post('/api/auth/request-message', userData, {
        headers: {
          'content-type': 'application/json',
        },
      });

      const message = data.message;

      const signature = await signMessageAsync({ message });

      const { url } = await signIn('credentials', {
        message,
        signature,
        redirect: false,
        callbackUrl: '/',
      });

      push(url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleWalletConnect = (connector) => {
    if (connector) {
      connectWallet(connector);
      closeModal();
    }
  };

  const walletIcons = {
    MetaMask: <MetaMask />,
    'Coinbase Wallet': <Coinbase />,
    WalletConnect: <WalletConnect />,
  };

  return (
    <SignInContainer>
      {<ErrorMessage />}
      {connectors.map((connector) => (
        <ConnectVia
          key={connector.id}
          clickHandler={() => handleWalletConnect(connector)}
          walletName={connector.name}
          svg={walletIcons[connector.name]}
        />
      ))}
    </SignInContainer>
  );
};

export default SignIn;
