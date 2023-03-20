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
  data: IVaultDates[];
  depositors: number;
  rebalanceIn: number;
};

type IVaultDates = {
  price: number;
  apy: number;
  tvl: number;
  date: string;
};
