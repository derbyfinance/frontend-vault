import React, { useState } from 'react';
import Modal from '@components/Common/Modal/Modal';
import { CloseButton } from '@icons/index';
import { financialActionTypes } from 'Constants/walletConstants';
import DepositTab from './DepositTab/DepositTab';
import {
  StyledClose,
  StyledDepositWithdrawButtons,
  StyledDepositWithdrawalModalContainer,
  StyledTitle,
  StyledHandleAction,
} from './DepositWithdrawalModal.styled';
import WithdrawTab from './WithdrawTab/WithdrawTab';
import ConnectWalletModal from '@components/Common/Modal/ConnectWalletModal/ConnectWalletModal';

const DepositWithdrawalModal = ({ isOpen, onClose }) => {
  const [financialActionType, setFinancialActionType] = useState(
    financialActionTypes.DEPOSIT,
  );
  const [isOpenWallet, setIsOpenWallet] = useState(false);
  const handleDeposit = () => {
    setFinancialActionType(financialActionTypes.DEPOSIT);
  };

  const handleWithdraw = () => {
    setFinancialActionType(financialActionTypes.WITHDRAW);
  };
  const closeModalWallet = () => {
    setIsOpenWallet(false)
  }
  const openModalWallet = () => {
    setIsOpenWallet(true)
  }

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
          <DepositTab openModal={openModalWallet}/>
        ) : (
          <WithdrawTab openModal={openModalWallet}/>
        )}
      </StyledDepositWithdrawalModalContainer>
    </Modal>
  );
};

export default DepositWithdrawalModal;
