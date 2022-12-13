import React from 'react';
import { useState } from 'react';
import MainButton from '@components/Common/MainButton/MainButton';
import { DFUSDC, Gas, Info, USDC } from '@icons/index';
import { financialActionTypes } from 'Constants/walletConstants';
import { percentageFormatter, removeNonNumeric, notValidNumberInput } from '@helpers/helperFunctions';
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
  StyledGasPrice,
  StyledInputsContainer,
  StyledModalDepositButton,
} from '../DepositWithdrawalModal.styled';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';

const DepositTab = () => {
  const [depositValue, setDepositValue] = useState({
    deposit: '',
    youGet: '',
  });
  const debouncedValue = useDebounce(depositValue.deposit, 500);

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

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleDepositField = (e) => {
    setDepositValue({ deposit: +removeNonNumeric(e.target.value), youGet: +removeNonNumeric(e.target.value) * 2 });
  };
  const handleDepositFieldYouGet = (e) => {
    setDepositValue({ deposit: +removeNonNumeric(e.target.value) / 2, youGet: +removeNonNumeric(e.target.value) });
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      write();
    } catch (error) {
      console.error(error, 'wallet not connected');
    }
  };

  const validateInput = (e) => {
    const number = Number(e.key)
    if (notValidNumberInput(e.key, number)) e.preventDefault()
  }

  return (
    <>
      <StyledInputsContainer>
        <DepositWithdrawInput
          label="YOU DEPOSIT"
          placeholder="0.00"
          value={depositValue.deposit}
          onChange={handleDepositField}
          onKeyDown={validateInput}
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
          onKeyDown={validateInput}
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
        <span>{percentageFormatter(APY)}</span>
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
      {isPrepareError && <ErrorMessage message={prepareError.message} />}
      <StyledModalDepositButton>
        <MainButton
          disabled={!write}
          btnText={financialActionTypes.DEPOSIT}
          onClick={handleClick}
        />
      </StyledModalDepositButton>
    </>
  );
};

export default DepositTab;
