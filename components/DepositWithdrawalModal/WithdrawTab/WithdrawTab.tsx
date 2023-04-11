import React, { FC, useContext, useEffect, useState } from 'react';
import AppButton from '@components/Common/AppButton/AppButton';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';
import ErrorMessageWithButton from '@components/Common/ErrorMessage/ErrorMessageWithButton';
import {
  currencyFormatter,
  notValidNumberInput,
  removeNonNumeric,
} from '@helpers/helperFunctions';
import { DFUSDC, Gas, Info, USDC } from '@icons/index';
import { NetworkContext } from '@pages/context/NetworkContext';
import { derbyVault } from 'Constants/addresses';
import { financialActionTypes } from 'Constants/walletConstants';
import { formatEther, parseEther } from 'ethers/lib/utils';
import { useDebounce } from 'use-debounce';
import { abi } from 'utils/abis/abi';
import {
  useAccount,
  useContractWrite,
  useFeeData,
  useNetwork,
  usePrepareContractWrite,
  useSwitchNetwork,
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
  StyledSuccessBox,
} from '../DepositWithdrawalModal.styled';

type WithdrawTabPropsType = {
  openModal: Function;
  closeModalWallet: Function;
  balanceOfWallet: string;
  balanceOfWalletDfUSDC: string;
  exchangeRateOfWallet: number;
};
const addressOrNameWithdraw: string = derbyVault;

const WithdrawTab: FC<WithdrawTabPropsType> = ({
  openModal,
  balanceOfWallet,
  balanceOfWalletDfUSDC,
  exchangeRateOfWallet,
  closeModalWallet,
}) => {
  const [withdrawValue, setWithdrawValue] = useState<any>({
    withdraw: 0,
    youGet: 0,
  });

  const debouncedValue = useDebounce(withdrawValue.withdraw, 500);
  const { isConnected, address } = useAccount();
  const [gasTotalPrice, setGasTotalPrice] = useState<any>(0);
  const { data: feeData } = useFeeData();

  const [isShowNetwork, setIsShowNetwork] = useState<boolean>(false);

  const handleWithdrawField = (e) => {
    if (removeNonNumeric(e.target.value).toString().length < 12) {
      setWithdrawValue({
        withdraw: +removeNonNumeric(e.target.value),
        youGet:
          +removeNonNumeric(e.target.value) *
          (isConnected ? exchangeRateOfWallet : 1),
      });
    }
  };

  const handleWithdrawFieldYouGet = (e) => {
    setWithdrawValue({
      youGet: +removeNonNumeric(e.target.value),
      withdraw:
        +removeNonNumeric(e.target.value) /
        (isConnected ? exchangeRateOfWallet : 1),
    });
  };

  const validateInput = (e) => {
    const number = Number(e.key);
    if (notValidNumberInput(e.key, number)) e.preventDefault();
  };

  const {
    config,
    data: gasData,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: addressOrNameWithdraw,
    contractInterface: abi,
    functionName: 'withdraw',
    args: [parseEther(debouncedValue[0].toString()), address, address],
    enabled: Boolean(debouncedValue),
  });

  const { data, write } = useContractWrite(config);

  const handleWithdraw = (e) => {
    try {
      e.preventDefault();
      write?.();
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const availableLiquidity = 187000; //backend

  useEffect(() => {
    try {
      if (gasData?.request != undefined) {
        let totalPrice = gasData?.request?.gasLimit.mul(feeData?.gasPrice);
        setGasTotalPrice(Number(formatEther(totalPrice)).toFixed(4));
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [gasData, feeData]);

  const { network } = useContext(NetworkContext);
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    if (isConnected) {
      console.log(network.id);
      console.log(chain.id);
      if (chain.id !== network.id) {
        setIsShowNetwork(true);
      }
    } else {
      setIsShowNetwork(false);
    }
  }, [network, isConnected, chain]);

  const errorMessageClickHandler = (id: number) => {
    if (isConnected) {
      switchNetwork(id);
      closeModalWallet();
    }
  };

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
              balance={
                isConnected ? balanceOfWalletDfUSDC && balanceOfWalletDfUSDC : 0
              }
              coinIcon={<DFUSDC />}
              coinName={'dfUSDC'}
              isMax={true}
            />
          }
        />

        <DepositWithdrawInput
          label={'YOU GET'}
          placeholder="0.00"
          value={withdrawValue.youGet}
          onKeyDown={validateInput}
          onChange={handleWithdrawFieldYouGet}
          endAddOn={
            <DepositWithdrawInputAdornment
              balance={isConnected ? balanceOfWallet && balanceOfWallet : 0}
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
        <span>{gasTotalPrice}</span>
        <Info />
      </StyledGasPrice>
      <StyledDisclaimerDeposit>
        There is sufficient liquidity to withdraw instantly
      </StyledDisclaimerDeposit>
      {isLoading && (
        <StyledSuccessBox>Transaction is pending...</StyledSuccessBox>
      )}
      {isSuccess && (
        <StyledSuccessBox>
          <p>
            Transaction is successful!
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </p>
        </StyledSuccessBox>
      )}
      {isShowNetwork && (
        <ErrorMessageWithButton
          errorMessageClickHandler={() => errorMessageClickHandler(network.id)}
          buttonMessage={'Switch Network'}
          message={`Please switch to ${network.name}. `}
        />
      )}
      {isPrepareError && withdrawValue.withdraw !== 0 && (
        <ErrorMessage message={'Error'} />
      )}
      <StyledModalDepositButton>
        {isConnected ? (
          <AppButton
            disable={withdrawValue.withdraw == '' || isLoading}
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
