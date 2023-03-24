import { apiHandler } from '@utils/apiHandler';
import createHttpError from 'http-errors';
import { NextApiHandler } from 'next';
import {
  IRace,
  IRaceBestPerformingVaults,
  IRaceHeader,
  IRaceKeyStats,
  IRaceLeaderboard,
} from 'types/race';

type GetResponse = {
  data: IRace;
};

const mockHeader: IRaceHeader = {
  nextRace: new Date(new Date().getTime() + 47.5 * 3_600_000), // 47.5h
  tvl: 31_170_100,
  members: 2177,
};

const mockLeaderboard: IRaceLeaderboard[] = [
  {
    name: 'TaekwondoHermione',
    followers: 38,
    invested: 9_900_000,
    performance: 6.32,
  },
  {
    name: 'MoveMudblood',
    followers: 144,
    invested: 7_310_000,
    performance: 5.93,
  },
  {
    name: 'SailingLongbottom',
    followers: 12,
    invested: 11_540_000,
    performance: 4.38,
  },
  {
    name: 'BoccePortkey',
    followers: 2,
    invested: 1_440_000,
    performance: 3.92,
  },
  {
    name: 'BadmintonGoblet',
    followers: 1,
    invested: 981_000,
    performance: 6.81,
  },
];

const mockBestPerformingVaults: IRaceBestPerformingVaults[] = [
  {
    name: 'USDC yVault',
    allocated: 9_900_000,
    performance: 6.32,
  },
  {
    name: 'USDC Coin',
    allocated: 7_310_000,
    performance: 5.93,
  },
  {
    name: 'dUSDC',
    allocated: 11_540_000,
    performance: 4.38,
  },
  {
    name: 'fUSDC',
    allocated: 1_440_000,
    performance: 3.94,
  },
  {
    name: 'fUSDC',
    allocated: 981_000,
    performance: 6.81,
  },
];

const mockRaceKeyStats: IRaceKeyStats[] = [
  {
    race: 'Race 1',
    followers: 39,
    invested: 9_900_000,
    performance: 6.32,
  },
  {
    race: 'Race 2',
    followers: 143,
    invested: 7_310_000,
    performance: 5.93,
  },
  {
    race: 'Race 3',
    followers: 1,
    invested: 11_540_000,
    performance: 4.38,
  },
];

const getRace: NextApiHandler<GetResponse> = async (req, res) => {
  const data: IRace = {
    header: mockHeader,
    leaderBoard: mockLeaderboard,
    bestPerformingVaults: mockBestPerformingVaults,
    keyStats: mockRaceKeyStats,
  };

  if (!data) throw new createHttpError.NotFound(`msg`);

  res.status(200).json({ data });
};

export default apiHandler({
  GET: getRace,
});
