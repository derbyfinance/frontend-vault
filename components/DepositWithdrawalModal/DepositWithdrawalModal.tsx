import React, { useEffect, useState } from 'react';
import ConnectWalletModal from '@components/Common/Modal/ConnectWalletModal/ConnectWalletModal';
import Modal from '@components/Common/Modal/Modal';
import { CloseButton } from '@icons/index';
import { abi } from '@utils/abis/abi';
import { financialActionTypes } from 'Constants/walletConstants';
import { BigNumber } from 'ethers';
import { useAccount, useContractRead } from 'wagmi';
import DepositTab from './DepositTab/DepositTab';
import {
  StyledClose,
  StyledDepositWithdrawButtons,
  StyledDepositWithdrawalModalContainer,
  StyledHandleAction,
  StyledTitle,
} from './DepositWithdrawalModal.styled';
import WithdrawTab from './WithdrawTab/WithdrawTab';
import { derbyVault, usdcTestToken } from 'Constants/addresses';

const addressOrName: string = derbyVault;

const DepositWithdrawalModal = ({ isOpen, onClose }) => {
  const [financialActionType, setFinancialActionType] = useState(
    financialActionTypes.DEPOSIT,
  );
  const [isOpenWallet, setIsOpenWallet] = useState(false);
  const handleDeposit = () => {
    setFinancialActionType(financialActionTypes.DEPOSIT);
  };
  const [balanceOfWallet, setBalanceOfWallet] = useState('');
  const [balanceOfWalletDfUSDC, setBalanceOfWalletDfUSDC] = useState('');
  const [exchangeRateOfWallet, setExchangeRateOfWallet] = useState<any>(0);
  const { isConnected, address } = useAccount();

  const handleWithdraw = () => {
    setFinancialActionType(financialActionTypes.WITHDRAW);
  };
  const closeModalWallet = () => {
    setIsOpenWallet(false);
  };
  const openModalWallet = () => {
    setIsOpenWallet(true);
  };
  const contractReadForUSDCUserBalance = useContractRead({
    addressOrName: isConnected
      ? usdcTestToken
      : '',
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address],
  });

  const contractReadForDfUSDCUserBalance = useContractRead({
    addressOrName: isConnected
      ? addressOrName
      : '',
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address],
  });

  const contractReadDecimals = useContractRead({
    addressOrName: isConnected
      ? addressOrName
      : '',
    contractInterface: abi,
    functionName: 'decimals',
  });

  const contractReadExchangeRate = useContractRead({
    addressOrName: isConnected
      ? addressOrName
      : '',
    contractInterface: abi,
    functionName: 'exchangeRate',
  });

  useEffect(() => {
    if (
      contractReadExchangeRate.data !== undefined &&
      contractReadForDfUSDCUserBalance?.data !== undefined
    ) {
      setBalanceOfWallet(
        (Number(contractReadForUSDCUserBalance?.data) / 1e18).toString(),
      );
      setExchangeRateOfWallet(
        Number(
          BigNumber.from(contractReadExchangeRate.data).div(
            BigNumber.from(10).pow(contractReadDecimals.data),
          ),
        ),
      );
      setBalanceOfWalletDfUSDC(
        (Number(contractReadForDfUSDCUserBalance?.data) / 1e18).toString(),
      );
    }
  }, [
    contractReadDecimals,
    contractReadExchangeRate,
    contractReadForDfUSDCUserBalance,
    contractReadForUSDCUserBalance,
  ]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ConnectWalletModal isOpen={isOpenWallet} onClose={closeModalWallet} />
      <StyledDepositWithdrawalModalContainer>
        <StyledTitle>USDC Vault</StyledTitle>
        <StyledClose onClick={onClose}>
          <CloseButton />
        </StyledClose>
        <StyledDepositWithdrawButtons>
          <StyledHandleAction
            financialActionType={
              financialActionType === financialActionTypes.DEPOSIT
            }
            onClick={handleDeposit}
          >
            Deposit
          </StyledHandleAction>
          <StyledHandleAction
            financialActionType={
              financialActionType === financialActionTypes.WITHDRAW
            }
            onClick={handleWithdraw}
          >
            Withdraw
          </StyledHandleAction>
        </StyledDepositWithdrawButtons>
        {financialActionType === financialActionTypes.DEPOSIT ? (
          <DepositTab
            openModal={openModalWallet}
            closeModalWallet={closeModalWallet}
            balanceOfWallet={balanceOfWallet}
            balanceOfWalletDfUSDC={balanceOfWalletDfUSDC}
            exchangeRateOfWallet={exchangeRateOfWallet}
          />
        ) : (
          <WithdrawTab
            openModal={openModalWallet}
            closeModalWallet={closeModalWallet}
            balanceOfWallet={balanceOfWallet}
            balanceOfWalletDfUSDC={balanceOfWalletDfUSDC}
            exchangeRateOfWallet={exchangeRateOfWallet}
          />
        )}
      </StyledDepositWithdrawalModalContainer>
    </Modal>
  );
};

export default DepositWithdrawalModal;
