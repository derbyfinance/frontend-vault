export type IHeaderStats = {
  totalValue: number;
  vaults: number;
  members: number;
};

export type IVaultData = {
  id: number;
  icon: string;
  coinName: string;
  coinShortName: string;
  balance: number;
  apy: string;
  members: string;
  tvl: string;
};
