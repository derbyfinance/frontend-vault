import { apiHandler } from '@utils/apiHandler';
import createHttpError from 'http-errors';
import { NextApiHandler } from 'next';
import { IVaultAllocations, IVaultStats } from 'types/stats';

type GetResponse = {
  data: {
    description: string;
    vaultAllocations: IVaultAllocations[];
    vaultStats: IVaultStats;
  };
};

const mockDescription = `Oh no, don't touch that. That's some new specialized weather sensing equipment. Hey, hey, I've seen this one, I've seen this one. This is a classic, this is where Ralph dresses up as the man from space. Something wrong with the starter, so I hid it. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it. Well, aren't you going up to the lake tonight, you've been planning it for two weeks.`;

const mockVaultAllocations = [
  {
    id: 1,
    icon: '/images/ProtocolIcons/yearn-finance.svg',
    name: 'USDC yVault',
    network: 'ETH',
    protocol: 'Yearn Finance',
    value: 1150000,
    weight: 11.64,
  },
  {
    id: 2,
    icon: '/images/ProtocolIcons/aave.svg',
    name: 'USD Coin',
    network: 'ETH',
    protocol: 'Aave',
    value: 925000,
    weight: 9.35,
  },
  {
    id: 3,
    icon: '/images/ProtocolIcons/gearbox.svg',
    name: 'dUSDC',
    network: 'ETH',
    protocol: 'Gearbox',
    value: 743000,
    weight: 7.51,
  },
  {
    id: 4,
    icon: '/images/ProtocolIcons/harvest-finance-farm.svg',
    name: 'fUSDC',
    network: 'ETH',
    protocol: 'Harvest Finance',
    value: 287000,
    weight: 2.9,
  },
];

const mockVaultStats = {
  data: [
    {
      price: 0.9,
      apy: 4.5,
      tvl: 8_200_000,
      date: '10-03-2023',
    },
    {
      price: 0.94,
      apy: 1.4,
      tvl: 8_900_000,
      date: '11-03-2023',
    },
    {
      price: 0.96,
      apy: 2.6,
      tvl: 9_100_000,
      date: '12-03-2023',
    },
    {
      price: 1.0,
      apy: 2.4,
      tvl: 9_200_000,
      date: '13-03-2023',
    },
    {
      price: 1.02,
      apy: 3.5,
      tvl: 9_300_000,
      date: '14-03-2023',
    },
    {
      price: 1.03,
      apy: 4.5,
      tvl: 9_400_000,
      date: '15-03-2023',
    },
    {
      price: 1.04,
      apy: 1.2,
      tvl: 9_500_000,
      date: '16-03-2023',
    },
    {
      price: 1.08,
      apy: 3.0,
      tvl: 9_600_000,
      date: '17-03-2023',
    },
    {
      price: 1.1,
      apy: 6.6,
      tvl: 9_700_000,
      date: '18-03-2023',
    },
    {
      price: 1.17,
      apy: 8.7,
      tvl: 9_800_000,
      date: '19-03-2023',
    },
    {
      price: 1.25,
      apy: 4.5,
      tvl: 9_900_000,
      date: '20-03-2023',
    },
  ],
  depositors: 1_100, // number of users in vault
  rebalanceIn: 6, // number of days to rebalance
};

const getVaultInfo: NextApiHandler<GetResponse> = async (req, res) => {
  const { vaultId } = req.query;

  const data: any = {
    description: mockDescription,
    vaultAllocations: mockVaultAllocations,
    vaultStats: mockVaultStats,
  };

  if (!data) throw new createHttpError.NotFound(`msg`);

  res.status(200).json({ data });
};

export default apiHandler({
  GET: getVaultInfo,
});
