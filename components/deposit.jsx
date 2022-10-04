import { useState } from 'react';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useDebounce } from 'use-debounce';

export function Deposit() {
  const [amount, setAmount] = useState(0);
  const debouncedAmount = useDebounce(amount, 500);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: '0xE97C826aA3ffca41694D5b6e3eD6bE3638F0EEeA',
    contractInterface: [
      {
        name: 'deposit',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
        outputs: [
          {
            internalType: 'uint256',
            name: 'shares',
            type: 'uint256',
          },
        ],
      },
    ],
    functionName: 'deposit',
    args: [parseInt(debouncedAmount)],
    enabled: Boolean(debouncedAmount),
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        write?.();
      }}
    >
      <label>Amount: </label>
      <input
        id="amount"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="1000"
        value={amount}
      />
      <button disabled={!write || isLoading}>
        {isLoading ? 'Depositing...' : 'Deposit'}
      </button>
      {isSuccess && (
        <div>
          Successfully deposited
          <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </form>
  );
}
