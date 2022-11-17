import React, { useState } from 'react';
import Modal from '@components/Common/Modal/Modal';
import { CloseButton, DFUSDC, Gas, I, USDC } from '@icons/index';
import {
  StyledAPY,
  StyledClose,
  StyledDepositWithdrawalModalContainer,
  StyledDepositWithdrawButtons,
  StyledDisclaimerDeposit,
  StyledGasPrice,
  StyledInputsContainer,
  StyledModalDepositButton,
  StyledTitle,
} from './DepositWithdrawalModal.styled';
import DepositWithdrawInput from './DepositWithdrawInput';
import DepositWithdrawRight from './DepositWithdrawRight';
import StyledMainButton from '@components/Common/MainButton/MainButton.styled';

const DepositWithdrawalModal = ({ isOpen, onClose, APY, gasPrice }) => {
  const [isDeposit, setIsDeposit] = useState(true);

  const handleDeposit = () => setIsDeposit(true);

  const handleWithdraw = () => setIsDeposit(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledDepositWithdrawalModalContainer>
        <StyledTitle>USDC Vault</StyledTitle>
        <StyledClose onClick={onClose}>
          <CloseButton />
        </StyledClose>
        <StyledDepositWithdrawButtons isDeposit={isDeposit}>
          <div onClick={handleDeposit}>Deposit</div>
          <div onClick={handleWithdraw}>Withdraw</div>
        </StyledDepositWithdrawButtons>
        <StyledInputsContainer>
          <DepositWithdrawInput
            label="YOU DEPOSIT"
            placeholder="0.00"
            right={
              <DepositWithdrawRight
                balance={1553}
                coinIcon={<USDC />}
                coinName={'USDC'}
                isMax={true}
              />
            }
          />
          <DepositWithdrawInput
            label={'YOU GET'}
            placeholder="0.00"
            right={
              <DepositWithdrawRight
                balance={20}
                coinIcon={<DFUSDC />}
                coinName={'dfUSDC'}
                isMax={false}
              />
            }
          />
        </StyledInputsContainer>
        <StyledAPY>
          APY: <span>{APY}</span>
        </StyledAPY>
        <StyledGasPrice>
          <Gas />
          <span>{(gasPrice = 541)}</span>
          <I />
        </StyledGasPrice>
        <StyledDisclaimerDeposit>
          By depositing, I acknowledge that withdrawals can be subject to fixed
          intervals
        </StyledDisclaimerDeposit>
        <StyledModalDepositButton>
          <StyledMainButton>Deposit USDC</StyledMainButton>
        </StyledModalDepositButton>
      </StyledDepositWithdrawalModalContainer>
    </Modal>
  );
};

export default DepositWithdrawalModal;
