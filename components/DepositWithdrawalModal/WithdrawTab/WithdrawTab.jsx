import React, { useState } from 'react';
import MainButton from '@components/Common/MainButton/MainButton';
import StyledMainButton from '@components/Common/MainButton/MainButton.styled';
import { DFUSDC, Gas, Info, USDC } from '@icons/index';
import { financialActionTypes } from 'Constants/wallet';
import { currencyFormatter } from 'Helpers/numberFormatters';
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

const WithdrawTab = () => {
  const [withdrawValue, setWithdrawValue] = useState();

  const debouncedValue = useDebounce(withdrawValue, 500);

  const handleWithdrawField = (e) => setWithdrawValue(e.target.value);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: '0xE97C826aA3ffca41694D5b6e3eD6bE3638F0EEeA',
    contractInterface: abi,
    functionName: 'withdraw',
    args: [parseInt(debouncedValue)],
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
  console.log(prepareError);
  return (
    <>
      <StyledInputsContainer>
        <DepositWithdrawInput
          type="number"
          label="YOU WITHDRAW"
          placeholder={'0.00'}
          value={withdrawValue}
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
        {isPrepareError && <p>Error: {prepareError?.message}</p>}
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
        There is sufficient liquidity to withdraw instantly'
      </StyledDisclaimerDeposit>
      <StyledModalDepositButton>
        <StyledMainButton
          disabled={!write}
          onClick={handleWithdraw}
          btnText={financialActionTypes.WITHDRAW}
        />
      </StyledModalDepositButton>
    </>
  );
};
export default WithdrawTab;
