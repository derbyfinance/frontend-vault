import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli, chain.mainnet, chain.arbitrum, chain.optimism, chain.polygon],
  [infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID })],
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: false,
});

const MyPage = ({ Component, pageProps, isDark }) => {
  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </WagmiConfig>
    </Provider>
  );
};

export default MyPage;
