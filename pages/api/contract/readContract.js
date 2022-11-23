import { EvmChain } from '@moralisweb3/evm-utils';
import Moralis from 'moralis';
import vaultAbi from '/utils/abis/vault.json';

const handler = async (req, res) => {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const address = '0xE97C826aA3ffca41694D5b6e3eD6bE3638F0EEeA';
  const functionName = 'exchangeRate';
  const chain = EvmChain.GOERLI;
  const abi = vaultAbi.abi;

  const response = await Moralis.EvmApi.utils.runContractFunction({
    abi,
    functionName,
    address,
    chain,
  });
  console.log(response.result);

  res.status(200).json({
    exchangeRate: response.result,
  });
};

export default handler;
