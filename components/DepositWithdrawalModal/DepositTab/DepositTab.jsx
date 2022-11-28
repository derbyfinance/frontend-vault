import React from 'react';
import { useState } from 'react';
import MainButton from '@components/Common/MainButton/MainButton';
import { DFUSDC, Gas, Info, USDC, Warning } from '@icons/index';
import { financialActionTypes } from 'Constants/wallet';
import { currencyFormatter, percentFormatter } from 'Helpers/numberFormatters';
import { useDebounce } from 'use-debounce';
import { abi } from 'utils/abis/abi';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import DepositWithdrawInput from '../DepositWithdrawInput';
import DepositWithdrawInputAdornment from '../DepositWithdrawInputAdornment';
import {
  StyledAPY,
  StyledDisclaimerDeposit,
  StyledErrorDepositWithdraw,
  StyledGasPrice,
  StyledInputsContainer,
  StyledModalDepositButton,
} from '../DepositWithdrawalModal.styled';

const DepositTab = () => {
  const [depositValue, setDepositValue] = useState({
    deposit: '',
    youGet: '',
  });
  const debouncedValue = useDebounce(depositValue, 500);

  const APY = 187; //backend
  const gasPrice = 187; //backend

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: '0xE97C826aA3ffca41694D5b6e3eD6bE3638F0EEeA',
    contractInterface: abi,
    functionName: 'deposit',
    args: [parseInt(debouncedValue)],
    enabled: Boolean(debouncedValue),
  });

  console.log(config);
  console.log({ prepareError });
  console.log({ isPrepareError });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleDepositField = (e) => {
    if (e.target.value.replace(/[1-9]/g, '')) return false;
    setDepositValue({ deposit: e.target.value, youGet: e.target.value * 2 });
  };
  const handleDepositFieldYouGet = (e) => {
    if (e.target.value.replace(/[1-9]/g, '')) return false;
    setDepositValue({ deposit: e.target.value / 2, youGet: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      write();
    } catch (error) {
      console.log(error, 'wallet not connected');
    }
  };

  return (
    <>
      <StyledInputsContainer>
        <DepositWithdrawInput
          // type="number"
          label="YOU DEPOSIT"
          placeholder="0.00"
          value={depositValue.deposit}
          onChange={handleDepositField}
          endAddOn={
            <DepositWithdrawInputAdornment
              balance={1553}
              coinIcon={<USDC />}
              coinName={'USDC'}
              isMax={true}
            />
          }
        />

        {isLoading && <div>Waiting for transaction...</div>}
        {isSuccess && (
          <div>
            Success!{' '}
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        )}
        <DepositWithdrawInput
          label={'YOU GET'}
          placeholder="0.00"
          onChange={handleDepositFieldYouGet}
          value={depositValue.youGet}
          endAddOn={
            <DepositWithdrawInputAdornment
              balance={20}
              coinIcon={<DFUSDC />}
              coinName={'dfUSDC'}
              isMax={false}
            />
          }
        />
      </StyledInputsContainer>
      <StyledAPY>
        <span>APY </span>
        <span>{percentFormatter(APY)}</span>
      </StyledAPY>
      <StyledGasPrice>
        <Gas />
        <span>{gasPrice}</span>
        <Info />
      </StyledGasPrice>
      <StyledDisclaimerDeposit>
        By depositing, I acknowledge that withdrawals can be subject to fixed
        intervals
      </StyledDisclaimerDeposit>
      <StyledModalDepositButton>
        <MainButton
          disabled={!write}
          btnText={financialActionTypes.DEPOSIT}
          onClick={handleClick}
        />
        {isPrepareError && (
          <StyledErrorDepositWithdraw>
            <div>
              <Warning />
            </div>
            <div>{prepareError?.message}</div>
          </StyledErrorDepositWithdraw>
        )}
      </StyledModalDepositButton>
    </>
  );
};

export default DepositTab;
