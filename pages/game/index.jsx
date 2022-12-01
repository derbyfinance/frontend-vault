import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import SingleChainRow from '@components/Common/DropDownMenu/SingleChain/SingleChainRow';
import Layout from '@components/Layout/Layout';
import { chainIcons } from '@components/pageComponents/VaultsPage/VaultsPageHero/chainIcons';

import { useSwitchNetwork } from 'wagmi';

const index = () => {
  const { chains } = useSwitchNetwork();

  return (
    <Layout>
      <div style={{ position: 'relative' }}>
        <DropDownMenu>
          {chains.map((chain) => (
            <SingleChainRow
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
