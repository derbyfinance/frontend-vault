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
  prices: [1, 1.02, 1.03, 1.04, 1.08, 1.1, 1.17, 1.25],
  apy: [2.4, 3.5, 4.5, 1.2, 3.0, 6.6, 8.7, 4.5],
  tvl: [
    8_400_000, 9_000_000, 9_400_000, 9_500_000, 9_600_000, 9_700_000, 9_800_000,
    9_900_000,
  ],
  depositors: 1_100, // number of users in vault
  rebalanceIn: 6, // number of days to rebalance
};

const getVaultInfo: NextApiHandler<GetResponse> = async (req, res) => {
  const { vaultId } = req.query;

  const data = {
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
