import { apiHandler } from '@utils/apiHandler';
import createHttpError from 'http-errors';
import { NextApiHandler } from 'next';
import { IHeaderStats, IVaultData } from 'types/stats';

type IStats = {
  headerStats: IHeaderStats;
  vaults: IVaultData[];
};

type GetResponse = {
  data: IStats;
};

const headerStats: IHeaderStats = {
  totalValue: 11_000_000,
  vaults: 5,
  members: 227,
};

const mockVaults: IVaultData[] = [
  {
    id: 1,
    icon: '/images/usdc.svg',
    coinName: 'USD Coin',
    coinShortName: 'USDC',
    balance: 32000,
    apy: '11.4 %',
    members: '180',
    tvl: '$ 1.7 M',
  },
  {
    id: 2,
    icon: '/images/usdt.svg',
    coinName: 'USD Tether',
    coinShortName: 'USDT',
    balance: 45000,
    apy: '16.4 %',
    members: '800',
    tvl: '$ 131.7 M',
  },
  {
    id: 3,
    icon: '/images/dai.svg',
    coinName: 'DAI',
    coinShortName: 'DAI',
    balance: 45000,
    apy: '1.4 %',
    members: '210',
    tvl: '$ 638 K',
  },
  {
    id: 4,
    icon: '/images/ETH.svg',
    coinName: 'Ethereum',
    coinShortName: 'ETH',
    balance: 450000,
    apy: '0.4 %',
    members: '543',
    tvl: '$ 13.7 M',
  },
  {
    id: 5,
    icon: '/images/BTC.svg',
    coinName: 'Wrapped Bitcoin',
    coinShortName: 'WBTC',
    balance: 450000,
    apy: '8.1 %',
    members: '12',
    tvl: '$ 1.7 M',
  },
];

const getStats: NextApiHandler<GetResponse> = async (req, res) => {
  const { address } = req.query;
  const stats = headerStats;

  if (address) {
    const vaults = mockVaults;

    if (!stats) throw new createHttpError.NotFound(`msg`);

    res.status(200).json({ data: { headerStats: stats, vaults: vaults } });
  } else {
    const vaults = mockVaults.map((vault) => {
      return { ...vault, balance: 0 };
    });

    res.status(200).json({ data: { headerStats: stats, vaults: vaults } });
  }
};

export default apiHandler({
  GET: getStats,
});
