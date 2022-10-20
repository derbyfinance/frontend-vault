import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '../styled/ThemeConfig';

const { provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID })],
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </WagmiConfig>
  );
}

export default MyApp;
