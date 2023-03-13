import { apiHandler } from '@utils/apiHandler';
import createHttpError from 'http-errors';
import { NextApiHandler } from 'next';

type GetResponse = {
  data: {
    portfolio: number;
    rewards: number;
    balances: {
      vaultUSDC: number;
      vaultDAI: number;
    };
  };
};

const mockWalletHoldings = {
  portfolio: 11645,
  rewards: 260,
  balances: {
    vaultUSDC: 7656,
    vaultDAI: 3989,
  },
};

const getWalletHoldings: NextApiHandler<GetResponse> = async (req, res) => {
  const { address } = req.query;

  const data = mockWalletHoldings;

  if (!data) throw new createHttpError.NotFound(`msg`);

  res.status(200).json({ data });
};

export default apiHandler({
  GET: getWalletHoldings,
});
