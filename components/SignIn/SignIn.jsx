import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import axios from 'axios';
import ConnectVia from './ConnectVia/ConnectVia';
import { Coinbase, MetaMask, WalletConnect } from '@icons/index';
import { SignInContainer } from './SignIn.styled';
function SignIn() {
  const { connectAsync, error } = useConnect();
  const { disconnectAsync, disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async (wal) => {
    if (isConnected) {
      await disconnectAsync();
    }

    console.log('Connect To Site Via Wallet');

    const userData = { network: 'evm' };

    if (wal === 'meta') {
      try {
        const { account, chain } = await connectAsync({
          connector: new MetaMaskConnector({}),
        });
        userData.address = account;
        userData.chain = chain.id;
      } catch (error) {
        console.log(error);
      }
    }

    if (wal === 'coin') {
      try {
        const { account, chain } = await connectAsync({
          connector: new CoinbaseWalletConnector({}),
        });
        userData.address = account;
        userData.chain = chain.id;
      } catch (error) {
        console.log(error);
      }
    }

    if (wal === 'wal') {
      try {
        const { account, chain } = await connectAsync({
          connector: new WalletConnectConnector({ options: { qrcode: true } }),
        });
        userData.address = account;
        userData.chain = chain.id;
      } catch (error) {
        console.log(error);
      }
    }

    console.log('Sending Connected Account and Chain ID to Moralis Auth API');

    const { data } = await axios.post('/api/auth/request-message', userData, {
      headers: {
        'content-type': 'application/json',
      },
    });

    console.log('Received Signature Request From Moralis Auth API');

    const message = data.message;

    const signature = await signMessageAsync({ message });

    console.log('Succesful Sign In, Redirecting to User Page');

    const { url } = await signIn('credentials', {
      message,
      signature,
      redirect: false,
      callbackUrl: '/',
    });

    push(url);
  };

  const handleMetaMask = () => {
    handleAuth('meta');
  };

  const handleCoinbaseWallet = () => {
    handleAuth('coin');
  };

  const handleWalletConnect = () => {
    handleAuth('wal');
  };

  const wallets = [
    {
      name: 'MetaMask',
      icon: <MetaMask />,
      onClick: handleMetaMask,
    },
    {
      name: 'Coinbase Wallet',
      icon: <Coinbase />,
      onClick: handleCoinbaseWallet,
    },
    {
      name: 'WalletConnect',
      icon: <WalletConnect />,
      onClick: handleWalletConnect,
    },
  ];

  return (
    <SignInContainer>
      {wallets.map(({ icon, name, onClick }, index) => (
        <ConnectVia
          key={index}
          clickHandler={onClick}
          svg={icon}
          walletName={name}
        />
      ))}
    </SignInContainer>
  );
}

export default SignIn;
