import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import SingleChain from '@components/Common/DropDownMenu/SingleChain/SIngleChain';
import Layout from '@components/Layout/Layout';
import {
  chainIcons,
  StyledSingleChainContainer,
} from '@components/pageComponents/VaultsPage/VaultsPageHero/chainIcons';
import Image from 'next/image';

import { chain, useSwitchNetwork } from 'wagmi';

const index = () => {
  const { chains } = useSwitchNetwork();

  return (
    <Layout>
      <div style={{ position: 'relative' }}>
        <DropDownMenu>
          {chains.map((chain) => (
            <SingleChain
              key={chain.id}
              chainIcon={chainIcons[chain.id]}
              chainName={chain.name}
            />
          ))}
        </DropDownMenu>
      </div>
    </Layout>
  );
};

export default index;
