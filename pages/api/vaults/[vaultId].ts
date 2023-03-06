import { apiHandler } from '@utils/apiHandler';
import createHttpError from 'http-errors';
import { NextApiHandler } from 'next';
import { IHeaderStats, IVaultData } from 'types/table/stats';

type GetResponse = {
  data: {
    headerStats: IHeaderStats;
    vaults: IVaultData[];
  };
};

const vaultInfo: IVaultInfo = {
  totalValue: 11_000_000,
  vaults: 5,
  members: 227,
};

const getVaultInfo: NextApiHandler<GetResponse> = async (req, res) => {
  const { vaultId } = req.query;
  const vaultInfo = mockedVaultInfo;

  if (!vaultInfo) throw new createHttpError.NotFound(`msg`);

  res.status(200).json({ data: { vaultInfo } });
};

export default apiHandler({
  GET: getVaultInfo,
});
