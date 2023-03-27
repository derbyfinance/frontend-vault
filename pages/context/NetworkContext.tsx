import { INetworkData } from '@components/pageComponents/VaultsPage/VaultsPageHero/VaultsPageHero';
import { createContext, useState } from 'react';

export const NetworkContext = createContext(null);

const NetworkProvider = ({ children }) => {
  const [networkId, setNetworkId] = useState(1);
  const [networkName, setNetworkName] = useState('');
  const [network, setNetwork] = useState<INetworkData>({
    id: 1,
    name: 'Ethereum',
  });
  return (
    <NetworkContext.Provider
      value={{ networkId, setNetworkId, network, setNetwork}}
    >
      {children}
    </NetworkContext.Provider>
  );
};
export default NetworkProvider;
