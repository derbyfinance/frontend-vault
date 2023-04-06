import { FC } from 'react';
import { Coinbase, MetaMask, WalletConnect } from '@icons/index';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import ConnectVia from './ConnectVia/ConnectVia';
import { SignInContainer } from './SignIn.styled';

type SignInProps = {
  closeModal: Function;
  walletDetectionHandler: Function;
};

const SignIn: FC<SignInProps> = ({ closeModal, walletDetectionHandler }) => {
  const { connectors, connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const connectWallet = async (connector) => {
    try {
      if (isConnected) {
        await disconnectAsync();
      }
      const userData: any = { network: 'evm' };
      const { account, chain } = await connectAsync({ connector });
      userData.address = account;
      userData.chain = chain.id;
      console.log(userData)
      const { message } = await requestChallengeAsync({
        address: account,
        chainId: chain.id,
      });

      const signature = await signMessageAsync({ message });

      // redirect user after success authentication to '/user' page
      const { url } = await signIn('moralis-auth', {
        message,
        signature,
        redirect: false,
        callbackUrl: '/vaults',
      });

      push(url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleWalletConnect = (connector) => {
    if (typeof window.ethereum == 'undefined') {
      walletDetectionHandler(true);
      connectWallet(connector);
    } else {
      walletDetectionHandler(false);
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
