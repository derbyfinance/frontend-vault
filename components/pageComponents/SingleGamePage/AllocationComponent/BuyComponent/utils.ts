import { IAllocation } from './BuyComponent';

export const setNetwork = (data: IAllocation[]) => {
  const ethereum = data.filter(
    (item: IAllocation) => item.network == 'Ethereum',
  );
  const polygon = data.filter((item: IAllocation) => item.network == 'Polygon');
  const arbitrumOne = data.filter(
    (item: IAllocation) => item.network == 'Arbitrum One',
  );
  const arbitrumGoerli = data.filter(
    (item: IAllocation) => item.network == 'Arbitrum Goerli',
  );
  const optimism = data.filter(
    (item: IAllocation) => item.network == 'Optimism',
  );
  const goerli = data.filter((item: IAllocation) => item.network == 'Goerli');
  return [ethereum, polygon, arbitrumOne, arbitrumGoerli, optimism, goerli];
};

const setCoin = (allocations: IAllocation[]) => {
  const arr = [0, 0, 0, 0, 0];
  allocations.map((item) => {
    if (item.name == 'USD Coin') {
      arr[0] += Number(item.price);
    } else if (item.name == 'USD Tether') {
      arr[1] += Number(item.price);
    } else if (item.name == 'DAI') {
      arr[2] += Number(item.price);
    } else if (item.name == 'Ethereum') {
      arr[3] += Number(item.price);
    } else if (item.name == 'Wrapped Bitcoin') {
      arr[4] += Number(item.price);
    }
  });
  return arr;
};

export const sortAllocations = (data: IAllocation[][]) => {
  const sortAllocationRes = [];
  const defaultArr = [0, 0, 0, 0, 0];
  data.map((allocation) => {
    if (allocation.length != 0) {
      sortAllocationRes.push(setCoin(allocation));
    } else {
      sortAllocationRes.push(defaultArr);
    }
  });
  return sortAllocationRes;
};
