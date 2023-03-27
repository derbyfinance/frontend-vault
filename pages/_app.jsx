import { SessionProvider } from 'next-auth/react';
import { WagmiConfig, chain, configureChains, createClient } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import '../styles/globals.css';
import NetworkProvider from './context/NetworkContext';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.arbitrum,
    chain.arbitrumGoerli,
    chain.optimism,
    chain.goerli,
  ],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API })],
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({ chains }),
    new WalletConnectConnector({ chains }),
  ],
});

const MyPage = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <NetworkProvider>
          <Component {...pageProps} />
        </NetworkProvider>
      </SessionProvider>
    </WagmiConfig>
  );
};

export default MyPage;
