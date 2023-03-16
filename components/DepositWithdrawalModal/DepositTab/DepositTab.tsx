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
import { useDebounce } from 'use-debounce';
import { abi } from 'utils/abis/abi';
import {
  useAccount,
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
  balanceOfWallet: string;
  balanceOfWalletDfUSDC: string;
  exchangeRateOfWallet: number;
};

const DepositTab: FC<DepositTabPropsType> = ({
  openModal,
  balanceOfWallet,
  balanceOfWalletDfUSDC,
  exchangeRateOfWallet,
}) => {
  const [depositValue, setDepositValue] = useState<any>({
    deposit: '',
    youGet: '',
  });
  const [isApprove, setIsApprove] = useState(true);
  const [ERC20Error, setERC20Error] = useState('');

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
  const { data, write } = useContractWrite(config);
  const { data: dataApprove, write: writeApprove } =
    useContractWrite(approveConfig);

  const approvePrepareContract = () => {
    if (!isApproveError) {
      setIsApprove(true);
      writeApprove?.();
    } else {
      setERC20Error(approveError?.message);
    }
  };

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: (data || dataApprove)?.hash,
  });

  useEffect(() => {
    if (helperForERC20Error(prepareError?.message)) {
      setERC20Error(
        'execution reverted: ERC20: transfer amount exceeds allowance',
      );
      setIsApprove(false);
    } else {
      setIsApprove(true);
    }
  }, [prepareError?.message]);

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
              disable={false}
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
