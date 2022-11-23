import { SessionProvider } from 'next-auth/react';
import { WagmiConfig, chain, configureChains, createClient } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';

const { provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID })],
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: false,
});

const MyPage = ({ Component, pageProps, isDark }) => {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>
  );
};

export default MyPage;
