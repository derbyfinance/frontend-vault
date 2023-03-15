import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import AppButton from '@components/Common/AppButton/AppButton';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';
import {
  helperForERC20Error,
  notValidNumberInput,
  percentageFormatter,
  removeNonNumeric,
} from '@helpers/helperFunctions';
import { DFUSDC, Gas, Info, USDC } from '@icons/index';
import { financialActionTypes } from 'Constants/walletConstants';
import { BigNumber } from 'ethers';
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

type DepositTabPropsType = {
  openModal: Function;
};

const DepositTab:FC<DepositTabPropsType> = ({ openModal }) => {
  const [depositValue, setDepositValue] = useState<any>({
    deposit: '',
    youGet: '',
  });
  const [balanceOfWallet, setBalanceOfWallet] = useState('');
  const [balanceOfWalletDfUSDC, setBalanceOfWalletDfUSDC] = useState('');
  const [ERC20Error, setERC20Error] = useState('');
  const [exchangeRateOfWallet, setExchangeRateOfWallet] = useState(0);
  const [isApprove, setIsApprove] = useState(true);

  const debouncedValue = useDebounce(depositValue.deposit, 500);
  const { isConnected, address } = useAccount();

  const APY = 187; //backend
  const gasPrice = 187; //backend

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: '0x3e5B75E1F65cc4940824CFa4d21AD63857Fe1E26',
    contractInterface: abi,
    functionName: 'deposit',
    args: [parseInt(debouncedValue[0]), address],
    enabled: Boolean(debouncedValue),
    onError(error) {
      console.log('Error', error);
    },
  });

  const {
    config: approveConfig,
    error: approveError,
    isError: isApproveError,
  } = usePrepareContractWrite({
    addressOrName: '0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1',
    contractInterface: abi,
    functionName: 'approve',
    args: ['0x3e5B75E1F65cc4940824CFa4d21AD63857Fe1E26', debouncedValue[0]],
  });
  const { data, write } = useContractWrite(isApprove ? approveConfig : config);


  const approvePrepareContract = () => {
    if (!isApproveError) {
      setIsApprove(true)
      write?.();
    } else {
      setERC20Error(approveError?.message);
    }
  };


  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const contractReadForUSDCUserBalance = useContractRead({
    addressOrName: '0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1',
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address],
  });

  const contractReadForDfUSDCUserBalance = useContractRead({
    addressOrName: '0x3e5B75E1F65cc4940824CFa4d21AD63857Fe1E26',
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address],
  });

  const contractReadDecimals = useContractRead({
    addressOrName: '0x3e5B75E1F65cc4940824CFa4d21AD63857Fe1E26',
    contractInterface: abi,
    functionName: 'decimals',
  });

  const contractReadExchangeRate = useContractRead({
    addressOrName: '0x3e5B75E1F65cc4940824CFa4d21AD63857Fe1E26',
    contractInterface: abi,
    functionName: 'exchangeRate',
  });

  useEffect(() => {
    setBalanceOfWallet(
      (Number(contractReadForUSDCUserBalance?.data) / 1e18).toString(),
    );
    setExchangeRateOfWallet(
      Number(
        BigNumber.from(contractReadExchangeRate?.data).div(
          BigNumber.from(10).pow(contractReadDecimals?.data),
        ),
      ),
    );
    setBalanceOfWalletDfUSDC(
      (Number(contractReadForDfUSDCUserBalance?.data) / 1e18).toString(),
    );
    if (helperForERC20Error(prepareError?.message)) {
      setERC20Error(
        'execution reverted: ERC20: transfer amount exceeds allowance',
      );
      setIsApprove(false);
    } else {
      setIsApprove(true)
    }
  }, [
    balanceOfWallet,
    contractReadDecimals?.data,
    contractReadExchangeRate,
    contractReadForUSDCUserBalance,
    exchangeRateOfWallet,
  ]);

  const handleDepositField = (e) => {
    setDepositValue({
      deposit: +removeNonNumeric(e.target.value),
      youGet: +removeNonNumeric(e.target.value) * exchangeRateOfWallet,
    });
  };
  const handleDepositFieldYouGet = (e) => {
    setDepositValue({
      deposit: +removeNonNumeric(e.target.value) / exchangeRateOfWallet,
      youGet: +removeNonNumeric(e.target.value),
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    try {
      if (isPrepareError) return;

      write?.();
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
              balance={balanceOfWallet && balanceOfWallet}
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
              balance={balanceOfWalletDfUSDC && balanceOfWalletDfUSDC}
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
        <ErrorMessage
          message={ERC20Error == '' ? prepareError?.message : ERC20Error}
        />
      )}
      <StyledModalDepositButton>
        {isConnected ? (
          isApprove ? (
            <AppButton
              disable={depositValue.deposit == ''}
              btnText={financialActionTypes.DEPOSIT}
              onClick={handleClick}
            />
          ) : (
            <AppButton
              disable={!write}
              btnText={'Approve'}
              onClick={approvePrepareContract}
            />
          )
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
