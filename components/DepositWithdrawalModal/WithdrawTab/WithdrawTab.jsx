import MainButton from '@components/Common/MainButton/MainButton';
import { DFUSDC, Gas, I, USDC } from '@icons/index';
import { financialActionTypes } from 'Constants/wallet';
import { currencyFormatter } from 'Helpers/numberFormatters';
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

const WithdrawTab = ({ financialActionType }) => {
  const availableLiquidity = 187000; //backend
  let gasPrice = 187; //backend

  return (
    <>
      <StyledInputsContainer>
        <DepositWithdrawInput
          label={
            financialActionTypes === financialActionTypes.DEPOSIT
              ? 'YOU DEPOSIT'
              : 'YOU WITHDRAW'
          }
          placeholder="0.00"
          endAddOn={
            <DepositWithdrawRight
              balance={1553}
              coinIcon={<DFUSDC />}
              coinName={'dfUSDC'}
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
        <I />
      </StyledGasPrice>
      <StyledDisclaimerDeposit>
        There is sufficient liquidity to withdraw instantly'
      </StyledDisclaimerDeposit>
      <StyledModalDepositButton>
        <MainButton btnText={financialActionTypes.WITHDRAW} />
      </StyledModalDepositButton>
    </>
  );
};
export default WithdrawTab;
