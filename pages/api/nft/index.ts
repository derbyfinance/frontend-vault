import { apiHandler } from '@utils/apiHandler';
import createHttpError from 'http-errors';
import { NextApiHandler } from 'next';
import { INFT, INFTWallet } from 'types/nft';

type GetResponse = {
  data: INFTWallet;
};

const NFTWallet: INFTWallet = {
  NFT: {
    stakedAmount: 11_645,
    performance: 935.85,
    performancePercentage: 1.29,
    rewards: 4.56,
    medals: {
      gold: 3,
      silver: 1,
      bronze: 0,
    },
  },
  wallet: {
    portfolio: 11_645,
    performance: 845.85,
    performancePercentage: 0.85,
    rewards: 4.87,
  },
};

const getRace: NextApiHandler<GetResponse> = async (req, res) => {
  const data: INFTWallet = NFTWallet;

  if (!data) throw new createHttpError.NotFound(`msg`);

  res.status(200).json({ data });
};

export default apiHandler({
  GET: getRace,
});
