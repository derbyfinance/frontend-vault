import styled from 'styled-components';

export const StyledDepositWithdrawalModalContainer = styled.div`
  position: relative;
  max-width: 360px;
`;

export const StyledTitle = styled.div`
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 20px;
`;

export const StyledClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: -10px;
  top: -20px;
`;

export const StyledDepositWithdrawButtons = styled.div`
  display: flex;
  justify-content: space-around;
  font: ${({ theme }) => theme.fonts.robotoBold};
  margin-top: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
`;

export const StyledHandleAction = styled.div`
font: ${({ financialActionType, theme }) => !financialActionType ? theme.fonts.robotoLight : theme.fonts.robotoMedium};
  color: ${({ financialActionType, theme }) =>
    financialActionType ? theme.colors.buttonActive : theme.colors.textMain};
  border-bottom: ${({ financialActionType, theme }) =>
    financialActionType ? `4px solid ${theme.colors.buttonActive}` : 'none'};
  width: 100%;
  padding-bottom: 26px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
`;

export const StyledAPY = styled.div`
  padding: 6px 6px;
  text-align: end;
  font: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 12px;
  & > span:first-child {
    font: ${({ theme }) => theme.fonts.robotoLight};
    font-size: 12px;
  }
  & > span:last-child {
    font: ${({ theme }) => theme.fonts.robotoMedium};
    font-size: 12px;
  }
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-top: 56px;
`;

export const StyledGasPrice = styled.div`
color: ${({ theme }) => theme.colors.textFaded};
font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 10px 0;
`;

export const StyledDisclaimerDeposit = styled.div`
  font: ${({ theme }) => theme.fonts.robotoLight};
  color: ${({ theme }) => theme.colors.textFaded};
  font-size: 10px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 20px;
`;

export const DepositWithdrawButtonContainer = styled.div`
  padding: 28px 0px;
  text-align: center;
`;

export const StyledModalDepositButton = styled.div`
  text-align: center;
`;
