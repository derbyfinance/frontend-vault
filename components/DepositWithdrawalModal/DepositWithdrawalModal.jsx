import React, { useState } from 'react';

import Modal from '@components/Common/Modal/Modal';
import { CloseButton } from '@icons/index';
import { financialActionTypes } from 'Constants/wallet';
import { ContractResultDecodeError } from 'wagmi';

import DepositTab from './DepositTab/DepositTab';
import {
  StyledClose,
  StyledDepositWithdrawButtons,
  StyledDepositWithdrawalModalContainer,
  StyledHandleDeposit,
  StyledHandleWithdraw,
  StyledTitle,
} from './DepositWithdrawalModal.styled';
import WithdrawTab from './WithdrawTab/WithdrawTab';

const DepositWithdrawalModal = ({ isOpen, onClose }) => {
  const [financialActionType, setFinancialActionType] = useState(
    financialActionTypes.DEPOSIT,
  );

  const handleDeposit = () => {
    setFinancialActionType(financialActionTypes.DEPOSIT);
  };

  const handleWithdraw = () => {
    setFinancialActionType(financialActionTypes.WITHDRAW);
  };

  console.log(financialActionType);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledDepositWithdrawalModalContainer>
        <StyledTitle>USDC Vault</StyledTitle>
        <StyledClose onClick={onClose}>
          <CloseButton />
        </StyledClose>
        <StyledDepositWithdrawButtons>
          <StyledHandleDeposit
            financialActionType={
              financialActionType === financialActionTypes.DEPOSIT
            }
            onClick={handleDeposit}
          >
            Deposit
          </StyledHandleDeposit>
          <StyledHandleWithdraw
            financialActionType={
              financialActionType === financialActionTypes.WITHDRAW
            }
            onClick={handleWithdraw}
          >
            Withdraw
          </StyledHandleWithdraw>
        </StyledDepositWithdrawButtons>
        {financialActionType === financialActionTypes.DEPOSIT ? (
          <DepositTab />
        ) : (
          <WithdrawTab />
        )}
      </StyledDepositWithdrawalModalContainer>
    </Modal>
  );
};

export default DepositWithdrawalModal;
