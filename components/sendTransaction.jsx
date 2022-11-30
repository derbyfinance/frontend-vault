import { useState } from 'react';
import { utils } from 'ethers';
import { useDebounce } from 'use-debounce';
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi';

const SendTransaction = () => {
  const [to, setTo] = useState('');
  const [debouncedTo] = useDebounce(to, 500);

  const [amount, setAmount] = useState('');
  const [debouncedValue] = useDebounce(amount, 500);

  const { config } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedValue ? utils.parseEther(debouncedValue) : undefined,
    },
  });
  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTransaction?.();
      }}
    >
      <input
        aria-label="Recipient"
        onChange={(e) => setTo(e.target.value)}
        placeholder="0xA0Cf…251e"
        value={to}
      />
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.5"
        value={amount}
      />
      <button disabled={isLoading || !sendTransaction || !to || !amount}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
      {isSuccess && (
        <div>
          Successfully sent {amount} ether to {to}
          <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )}
    </form>
  );
};

export default SendTransaction;
