import React from 'react';
import { useState } from 'react';
import AppButton from '@components/Common/AppButton/AppButton';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';
import {
  notValidNumberInput,
  percentageFormatter,
  removeNonNumeric,
} from '@helpers/helperFunctions';
import { DFUSDC, Gas, Info, USDC } from '@icons/index';
import { financialActionTypes } from 'Constants/walletConstants';
import { useDebounce } from 'use-debounce';
import { abi } from 'utils/abis/abi';
import {
  useAccount,
  useContractRead,
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

const DepositTab = ({ openModal }) => {
  const [depositValue, setDepositValue] = useState<any>({
    deposit: '',
    youGet: '',
  });
  const debouncedValue = useDebounce(depositValue.deposit, 500);
  const { isConnected } = useAccount();

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
    args: [parseInt(debouncedValue[0])],
    enabled: Boolean(debouncedValue),
  });

  const { data, write } = useContractWrite(config);

  const contractReadForUSDCUserBalance = useContractRead({
    addressOrName: '0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1',
    contractInterface: abi,
    functionName: 'balanceOf',
  });
  const contractReadFordfUSDCUserBalance = useContractRead({
    addressOrName: '0x35a7014248162BE670B4BB4Cb08505FB78B17Bcf',
    contractInterface: abi,
    functionName: 'balanceOf',
  });

  const contractReadExchangeRate = useContractRead({
    addressOrName: '0x35a7014248162BE670B4BB4Cb08505FB78B17Bcf',
    contractInterface: abi,
    functionName: 'exchangeRate',
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleDepositField = (e) => {
    setDepositValue({
      deposit: +removeNonNumeric(e.target.value),
      youGet: +removeNonNumeric(e.target.value) * 2,
    });
  };
  const handleDepositFieldYouGet = (e) => {
    setDepositValue({
      deposit: +removeNonNumeric(e.target.value) / 2,
      youGet: +removeNonNumeric(e.target.value),
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      if(isPrepareError) return;
      write();
    } catch (error) {
      console.error(error, 'wallet not connected');
    }
  };

  const validateInput = (e) => {
    const number = Number(e.key);
    if (notValidNumberInput(e.key, number)) e.preventDefault();
  };

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
              balance={
                contractReadForUSDCUserBalance.data !== undefined
                  ? contractReadForUSDCUserBalance.data
                  : 0
              }
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
              balance={
                contractReadFordfUSDCUserBalance.data !== undefined
                  ? contractReadFordfUSDCUserBalance.data
                  : 0
              }
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
      {isPrepareError && depositValue.deposit !== '' && (
        <ErrorMessage message={prepareError.message} />
      )}
      <StyledModalDepositButton>
        {isConnected ? (
          <AppButton
            disable={depositValue.deposit == ''}
            btnText={financialActionTypes.DEPOSIT}
            onClick={handleClick}
          />
        ) : (
          <AppButton
            disable={false}
            btnText={'Connect Your Wallet'}
            onClick={() => openModal()}
          />
        )}
      </StyledModalDepositButton>
    </>
  );
};

export default DepositTab;
