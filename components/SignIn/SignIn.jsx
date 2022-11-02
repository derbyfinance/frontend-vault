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
      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector({}),
      });
      userData.address = account;
      userData.chain = chain.id;
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
      const { account, chain } = await connectAsync({
        connector: new WalletConnectConnector({ options: { qrcode: true } }),
      });
      userData.address = account;
      userData.chain = chain.id;
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

  return (
    <SignInContainer>
      {error && <div>{error.message}</div>}
      <ConnectVia
        svg={<MetaMask />}
        walletName="Metamask"
        clickHandler={handleMetaMask}
      />
      <ConnectVia
        svg={<Coinbase />}
        walletName="Coinbase Wallet"
        clickHandler={handleCoinbaseWallet}
      />
      <button
        onClick={() => {
          disconnect();
          console.log('Disconnected');
        }}
      >
        Disconnect
      </button>
      <ConnectVia
        svg={<WalletConnect />}
        walletName="Wallet Connect"
        clickHandler={handleWalletConnect}
      />
    </SignInContainer>
  );
}

export default SignIn;
