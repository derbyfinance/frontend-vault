import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { SessionProvider } from 'next-auth/react';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon, chain.arbitrum, chain.optimism],
  [infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID })],
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
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
};

export default MyPage;
