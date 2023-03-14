import React, { useState } from 'react';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';
import { currencyFormatter, removeNonNumeric } from '@helpers/helperFunctions';
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
import AppButton from '@components/Common/AppButton/AppButton';

const WithdrawTab = ({ openModal }) => {
  const [withdrawValue, setWithdrawValue] = useState<any>({
    withdraw: '',
    youGet: '',
  });

  const debouncedValue = useDebounce(withdrawValue.withdraw, 500);
  const { isConnected } = useAccount();

  const handleWithdrawField = (e) => {
    setWithdrawValue({
      withdraw: +removeNonNumeric(e.target.value),
      youGet: +removeNonNumeric(e.target.value) * 2,
    });
  };

  const handleWithdrawFieldYouGet = (e) => {
    setWithdrawValue({
      youGet: +removeNonNumeric(e.target.value),
      withdraw: +removeNonNumeric(e.target.value) / 2,
    });
  };

  const validateInput = (e) => {
    const number = Number(e.key);
    if (!number && e.key !== 'Backspace' && e.key !== 'Tab') e.preventDefault();
  };

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: '0xE97C826aA3ffca41694D5b6e3eD6bE3638F0EEeA',
    contractInterface: abi,
    functionName: 'withdraw',
    args: [parseInt(debouncedValue[0])],
    enabled: Boolean(debouncedValue),
  });

  const { data, write } = useContractWrite(config);

  const handleWithdraw = (e) => {
    e.preventDefault();
    write();
  };

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const availableLiquidity = 187000; //backend
  let gasPrice = 187; //backend
  return (
    <>
      <StyledInputsContainer>
        <DepositWithdrawInput
          label="YOU WITHDRAW"
          placeholder={'0.00'}
          value={withdrawValue.withdraw}
          onKeyDown={validateInput}
          onChange={handleWithdrawField}
          endAddOn={
            <DepositWithdrawInputAdornment
              balance={1553}
              coinIcon={<DFUSDC />}
              coinName={'dfUSDC'}
              isMax={true}
            />
          }
        />
        {isLoading && <p>Transaction is pending...</p>}
        {isSuccess && (
          <p>
            Transaction is successful!
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </p>
        )}
        <DepositWithdrawInput
          label={'YOU GET'}
          placeholder="0.00"
          value={withdrawValue.youGet}
          onKeyDown={validateInput}
          onChange={handleWithdrawFieldYouGet}
          endAddOn={
            <DepositWithdrawInputAdornment
              balance={20}
              coinIcon={<USDC />}
              coinName={'USDC'}
              isMax={false}
            />
          }
        />
      </StyledInputsContainer>
      <StyledAPY>
        <span>Available Liquidity </span>
        <span>{currencyFormatter(availableLiquidity)}</span>
      </StyledAPY>
      <StyledGasPrice>
        <Gas />
        <span>{gasPrice}</span>
        <Info />
      </StyledGasPrice>
      <StyledDisclaimerDeposit>
        There is sufficient liquidity to withdraw instantly
      </StyledDisclaimerDeposit>
      {isPrepareError && <ErrorMessage message={prepareError.message} />}
      <StyledModalDepositButton>
      {isConnected ? (
          <AppButton
            disable={withdrawValue.deposit == ''}
            btnText={financialActionTypes.WITHDRAW}
            onClick={handleWithdraw}
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
export default WithdrawTab;
