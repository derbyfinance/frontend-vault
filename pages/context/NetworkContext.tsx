import { INetworkData } from '@components/pageComponents/VaultsPage/VaultsPageHero/VaultsPageHero';
import { createContext, useState } from 'react';

export const NetworkContext = createContext(null);

const NetworkProvider = ({ children }) => {
  const [networkId, setNetworkId] = useState(80001);
  const [networkName, setNetworkName] = useState('');
  const [network, setNetwork] = useState<INetworkData>({
    id: 80001,
    name: 'Polygon Mumbai',
  });
  return (
    <NetworkContext.Provider
      value={{ networkId, setNetworkId, network, setNetwork }}
    >
      {children}
    </NetworkContext.Provider>
  );
};
export default NetworkProvider;
