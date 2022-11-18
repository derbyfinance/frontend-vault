import MainButton from '@components/Common/MainButton/MainButton';
import { CloseButton, DFUSDC, Gas, I, USDC } from '@icons/index';
import { financialActionTypes } from 'Constants/wallet';
import { currencyFormatter, percentFormatter } from 'Helpers/numberFormatters';
import React from 'react';
import {
  StyledAPY,
  StyledDisclaimerDeposit,
  StyledGasPrice,
  StyledInputsContainer,
  StyledModalDepositButton,
} from '../DepositWithdrawalModal.styled';
import DepositWithdrawInput from '../DepositWithdrawInput';
import DepositWithdrawRight from '../DepositWithdrawRight';

const DepositTab = ({ financialActionType }) => {
  const APY = 187; //backend
  const gasPrice = 187; //backend

  return (
    <>
      <StyledInputsContainer>
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
      <StyledAPY>
        <span>APY </span>
        <span>{percentFormatter(APY)}</span>
      </StyledAPY>
      <StyledGasPrice>
        <Gas />
        <span>{gasPrice}</span>
        <I />
      </StyledGasPrice>
      <StyledDisclaimerDeposit>
        By depositing, I acknowledge that withdrawals can be subject to fixed
        intervals
      </StyledDisclaimerDeposit>
      <StyledModalDepositButton>
        <MainButton btnText={financialActionTypes.DEPOSIT} />
      </StyledModalDepositButton>
    </>
  );
};

export default DepositTab;
