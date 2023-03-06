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

export type IVaultAllocations = {
  id: number;
  icon: string;
  name: string;
  network: string;
  protocol: string;
  value: number;
  weight: number;
};

export type IVaultStats = {
  prices: number[];
  apy: number[];
  tvl: number[];
  depositors: number;
  rebalanceIn: number;
};
