import React from 'react'
import CoinList from './components/CoinList'
import { StyledCoinsListContainer, StyledCoinsListHeader, StyledCoinsList } from './VaultsPageList.styled'

const data = [
    {
      id: 1,
      icon: '',
      coinName: 'USD Coin',
      coinShortName: 'USDC',
      balance: 32000,
      apy: '11.4 %',
      members: '18000',
      tvl: '$ 1.7 M',
    },
    {
      id: 2,
      icon: '',
      coinName: 'USD Tether',
      coinShortName: 'USDT',
      balance: 45000,
      apy: '16.4 %',
      members: '1800',
      tvl: '$ 131.7 M',
    },
    {
      id: 3,
      icon: '',
      coinName: 'DAI',
      coinShortName: 'DAI',
      balance: 45000,
      apy: '1.4 %',
      members: '210',
      tvl: '$ 638 K',
    },
    {
      id: 4,
      icon: '',
      coinName: 'Ethereum',
      coinShortName: 'ETH',
      balance: 450000,
      apy: '0.4 %',
      members: '543',
      tvl: '$ 13.7 M',
    },
    {
      id: 5,
      icon: '',
      coinName: 'Wrapped Bitcoin',
      coinShortName: 'WBTC',
      balance: 1800,
      apy: '8.1 %',
      members: '12',
      tvl: '$ 1.7 M',
    },
  ];

const VaultsPageList = () => {
  return (
    <StyledCoinsListContainer >
        <StyledCoinsListHeader>
            Availabe Vaults
        </StyledCoinsListHeader>
        <CoinList coinsData={data}/>
    </StyledCoinsListContainer>
  )
}

export default VaultsPageList