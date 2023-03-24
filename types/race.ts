export type IRace = {
  header: IRaceHeader;
  leaderBoard: IRaceLeaderboard[];
  bestPerformingVaults: IRaceBestPerformingVaults[];
  keyStats: IRaceKeyStats[];
};

export type IRaceLeaderboard = {
  name: string;
  followers: number;
  invested: number;
  performance: number;
};

export type IRaceHeader = {
  nextRace: Date;
  tvl: number;
  members: number;
};

export type IRaceBestPerformingVaults = {
  name: string;
  allocated: number;
  performance: number;
};

export type IRaceKeyStats = {
  race: string;
  followers: number;
  invested: number;
  performance: number;
};
