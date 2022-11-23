import React from 'react';
import { useState } from 'react';
import MainButton from '@components/Common/MainButton/MainButton';
import { DFUSDC, Gas, Info, USDC } from '@icons/index';
import { financialActionTypes } from 'Constants/wallet';
import { currencyFormatter, percentFormatter } from 'Helpers/numberFormatters';
import DepositWithdrawInput from '../DepositWithdrawInput';
import DepositWithdrawInputAdornment from '../DepositWithdrawInputAdornment';
import {
  StyledAPY,
  StyledDisclaimerDeposit,
  StyledGasPrice,
  StyledInputsContainer,
  StyledModalDepositButton,
} from '../DepositWithdrawalModal.styled';

const DepositTab = () => {
  const [depositValue, setDepositValue] = useState();
  const APY = 187; //backend
  const gasPrice = 187; //backend

  return (
    <>
      <StyledInputsContainer>
        <DepositWithdrawInput
          label={'YOU DEPOSIT'}
          placeholder="0.00"
          value
          endAddOn={
            <DepositWithdrawInputAdornment
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
            <DepositWithdrawInputAdornment
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
        <Info />
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
