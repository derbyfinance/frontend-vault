import React, { FC, useContext, useEffect } from 'react';
import { useState } from 'react';
import AppButton from '@components/Common/AppButton/AppButton';
import ErrorMessage from '@components/Common/ErrorMessage/ErrorMessage';
import ErrorMessageWithButton from '@components/Common/ErrorMessage/ErrorMessageWithButton';
import {
  helperForERC20Error,
  notValidNumberInput,
  notValidNumberInputDet,
  percentageFormatter,
  removeNonNumeric,
} from '@helpers/helperFunctions';
import { DFUSDC, Gas, Info, USDC } from '@icons/index';
import { NetworkContext } from '@pages/context/NetworkContext';
import { derbyVault, usdcTestToken } from 'Constants/addresses';
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

type DepositTabPropsType = {
  openModal: Function;
  closeModalWallet: Function;
  balanceOfWallet: string;
  balanceOfWalletDfUSDC: string;
  exchangeRateOfWallet: number;
};

const addressOrName: string = derbyVault;

const DepositTab: FC<DepositTabPropsType> = ({
  openModal,
  balanceOfWallet,
  balanceOfWalletDfUSDC,
  exchangeRateOfWallet,
  closeModalWallet,
}) => {
  const [depositValue, setDepositValue] = useState<any>({
    deposit: 0,
    youGet: 0,
  });
  const [isApprove, setIsApprove] = useState(true);
  const [ERC20Error, setERC20Error] = useState('');
  const [isError, setIsError] = useState(false);
  const [gasTotalPrice, setGasTotalPrice] = useState<any>(0);

  const [isShowNetwork, setIsShowNetwork] = useState<boolean>(false);

  const debouncedValue = useDebounce(depositValue.deposit, 500);
  const { isConnected, address } = useAccount();

  const APY = 187; //backend

  const { data: feeData } = useFeeData();

  const {
    config,
    data: gasData,
    error: prepareError,
    isError: isPrepareError,
    isLoading: prepareLoading,
  } = usePrepareContractWrite({
    addressOrName: addressOrName,
    contractInterface: abi,
    functionName: 'deposit',
    args: [parseEther(debouncedValue[0].toString()), address],
    enabled: Boolean(debouncedValue),
    onError(error) {
      console.log('Error', error);
    },
  });

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

  const {
    config: approveConfig,
    error: approveError,
    isError: isApproveError,
  } = usePrepareContractWrite({
    addressOrName: usdcTestToken,
    contractInterface: abi,
    functionName: 'approve',
    args: [derbyVault, parseEther(debouncedValue[0].toString())],
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

  const handleDepositField = (e) => {
    if (Number(e.target.value) < 10e9) {
      setDepositValue({
        deposit: e.target.value.includes('.')
          ? e.target.value
          : +e.target.value,
        youGet: e.target.value / (isConnected ? exchangeRateOfWallet : 1),
      });
    }
  };
  const handleDepositFieldYouGet = (e) => {
    if (Number(e.target.value) < 10e9) {
      setDepositValue({
        deposit:
          +removeNonNumeric(e.target.value) *
          (isConnected ? exchangeRateOfWallet : 1),
        youGet: e.target.value.includes('.') ? e.target.value : +e.target.value,
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      setERC20Error('');
    }
    if (isSuccess) {
      console.log('isSuccess');
      setIsApprove(true);
      setERC20Error('');
      setIsError(false);
    } else {
      if (helperForERC20Error(prepareError?.message)) {
        setIsError(true);
        console.log('error ---- ');
        setERC20Error(
          'execution reverted: ERC20: transfer amount exceeds allowance',
        );
        setIsApprove(false);
      }
    }
  }, [isSuccess, isLoading, prepareError?.message]);

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
    if (depositValue.deposit.toString().includes('.')) {
      if (notValidNumberInput(e.key, number)) e.preventDefault();
    } else {
      if (notValidNumberInputDet(e.key, number)) e.preventDefault();
    }
  };

  const { network } = useContext(NetworkContext);
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    if (isConnected) {
      if (chain.id !== network.id) {
        setIsShowNetwork(true);
      }
    } else {
      setIsShowNetwork(false);
    }
  }, [network, isConnected, chain]);

  const errorMessageClickHandler = (id: number) => {
    if (isConnected) {
      closeModalWallet();
      switchNetwork(id);
    }
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
              balance={isConnected ? balanceOfWallet && balanceOfWallet : 0}
              coinIcon={<USDC />}
              coinName={'USDC'}
              isMax={true}
            />
          }
        />

        <DepositWithdrawInput
          label={'YOU GET'}
          placeholder="0.00"
          onKeyDown={validateInput}
          onChange={handleDepositFieldYouGet}
          value={depositValue.youGet}
          endAddOn={
            <DepositWithdrawInputAdornment
              balance={
                isConnected ? balanceOfWalletDfUSDC && balanceOfWalletDfUSDC : 0
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
        <span>{gasTotalPrice}</span>
        <Info />
      </StyledGasPrice>
      <StyledDisclaimerDeposit>
        By depositing, I acknowledge that withdrawals can be subject to fixed
        intervals
      </StyledDisclaimerDeposit>
      {isLoading && (
        <StyledSuccessBox>Waiting for transaction...</StyledSuccessBox>
      )}

      {isSuccess && (
        <StyledSuccessBox>
          Success!{' '}
          <a
            href={`https://mumbai.polygonscan.com//tx/${
              (data || dataApprove)?.hash
            }`}
            target="_blank"
            rel="noreferrer"
          >
            Etherscan
          </a>
        </StyledSuccessBox>
      )}
      {isShowNetwork && (
        <ErrorMessageWithButton
          errorMessageClickHandler={() => errorMessageClickHandler(network.id)}
          buttonMessage={'Switch Network'}
          message={`Please switch to ${network.name}. `}
        />
      )}
      {isPrepareError && depositValue.deposit != false && (
        <ErrorMessage message={ERC20Error == '' ? 'Error' : ERC20Error} />
      )}
      <StyledModalDepositButton>
        {isConnected ? (
          isApprove ? (
            <AppButton
              disable={depositValue.deposit == false || isError}
              btnText={financialActionTypes.DEPOSIT}
              onClick={handleClick}
            />
          ) : (
            <AppButton
              disable={isApproveError || isLoading}
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
