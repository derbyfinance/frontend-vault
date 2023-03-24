export type INFTWallet = {
  NFT: INFT;
  wallet: IWallet;
};

export type INFT = {
  stakedAmount: number;
  performance: number;
  performancePercentage: number;
  rewards: number;
  medals: INFTMedals;
};

export type INFTMedals = {
  gold: number;
  silver: number;
  bronze: number;
};

export type IWallet = {
  portfolio: number;
  performance: number;
  performancePercentage: number;
  rewards: number;
};
