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
import MainButton from '@components/Common/MainButton/MainButton';
import { financialActionTypes } from 'Constants/wallet';
import { currencyFormatter, percentFormatter } from 'Helpers/numberFormatters';
import DepositTab from './DepositTab/DepositTab';
import WithdrawTab from './WithdrawTab/WithdrawTab';

const DepositWithdrawalModal = ({
  isOpen,
  onClose,
  APY = 187,
  gasPrice = 187,
  availableLiquidity = 187000,
}) => {
  const [financialActionType, setFinancialActionType] = useState(
    financialActionTypes.DEPOSIT,
  );

  const handleDeposit = () =>
    setFinancialActionType(financialActionTypes.DEPOSIT);

  const handleWithdraw = () =>
    setFinancialActionType(financialActionTypes.WITHDRAW);

  const withdrawButton = () => (
    <MainButton btnText={financialActionTypes.WITHDRAW} />
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* {financialActionType === financialActionTypes.DEPOSIT ? (
        <DepositTab />
      ) : (
        <WithdrawTab />
      )} */}
      <StyledDepositWithdrawalModalContainer>
        <StyledTitle>USDC Vault</StyledTitle>
        <StyledClose onClick={onClose}>
          <CloseButton />
        </StyledClose>
        <StyledDepositWithdrawButtons
          financialActionType={
            financialActionType === financialActionTypes.DEPOSIT
          }
        >
          <div onClick={handleDeposit}>Deposit</div>
          <div onClick={handleWithdraw}>Withdraw</div>
        </StyledDepositWithdrawButtons>
        {financialActionType === financialActionTypes.DEPOSIT ? (
          <DepositTab />
        ) : (
          <WithdrawTab />
        )}
        {/* <StyledInputsContainer>
          <DepositWithdrawInput
            label={
              financialActionType === financialActionTypes.DEPOSIT
                ? 'YOU DEPOSIT'
                : 'YOU WITHDRAW'
            }
            placeholder="0.00"
            endAddOn={
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
            endAddOn={
              <DepositWithdrawRight
                balance={20}
                coinIcon={<DFUSDC />}
                coinName={'dfUSDC'}
                isMax={false}
              />
            }
          />
        </StyledInputsContainer>
        {financialActionType === financialActionTypes.DEPOSIT ? (
          <StyledAPY>
            <span>APY</span>
            <span>{percentFormatter(APY)}</span>
          </StyledAPY>
        ) : (
          <StyledAPY>
            <span>Available Liquidity </span>
            <span>{currencyFormatter(availableLiquidity)}</span>
          </StyledAPY>
        )}
        <StyledGasPrice>
          <Gas />
          <span>{(gasPrice = 541)}</span>
          <I />
        </StyledGasPrice>
        <StyledDisclaimerDeposit>
          {financialActionType === financialActionTypes.DEPOSIT
            ? 'By depositing, I acknowledge that withdrawals can be subject to fixed intervals'
            : 'There is sufficient liquidity to withdraw instantly'}
        </StyledDisclaimerDeposit>
        <StyledModalDepositButton>
          {financialActionType === financialActionTypes.DEPOSIT
            ? depositButton()
            : withdrawButton()}
        </StyledModalDepositButton> */}
      </StyledDepositWithdrawalModalContainer>
    </Modal>
  );
};

export default DepositWithdrawalModal;
