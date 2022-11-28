import styled from 'styled-components';

export const StyledDepositWithdrawalModalContainer = styled.div`
  position: relative;
  max-width: 360px;
`;

export const StyledTitle = styled.div`
  font: ${({ theme }) => theme.font.slabMedium};
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
  font: ${({ theme }) => theme.font.robotoBold};
  margin-top: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
`;

export const StyledHandleWithdraw = styled.div`
  color: ${({ financialActionType, theme }) =>
    financialActionType ? theme.colors.buttonActive : theme.colors.textMain};
  border-bottom: ${({ financialActionType, theme }) =>
    financialActionType ? `2px solid ${theme.colors.buttonActive}` : 'none'};
  width: 100%;
  padding-bottom: 26px;
  text-align: center;
  cursor: pointer;
`;

export const StyledHandleDeposit = styled.div`
  color: ${({ financialActionType, theme }) =>
    financialActionType ? theme.colors.buttonActive : theme.colors.textMain};
  border-bottom: ${({ financialActionType, theme }) =>
    financialActionType ? `2px solid ${theme.colors.buttonActive}` : 'none'};
  width: 100%;
  padding-bottom: 26px;
  text-align: center;
  cursor: pointer;
`;
export const StyledAPY = styled.div`
  padding: 6px 6px;
  text-align: end;
  font: ${({ theme }) => theme.font.robotoLight};
  font-size: 12px;
  & > span:first-child {
    font: ${({ theme }) => theme.font.robotoLight};
    font-size: 12px;
  }
  & > span:last-child {
    font: ${({ theme }) => theme.font.robotoMedium};
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 10px 0;
`;

export const StyledDisclaimerDeposit = styled.div`
  font: ${({ theme }) => theme.font.robotoLight};
  color: ${({ theme }) => theme.colors.textFaded};
  font-size: 10px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const DepositWithdrawButtonContainer = styled.div`
  padding: 28px 0px;
  text-align: center;
`;

export const StyledModalDepositButton = styled.div`
  text-align: center;
`;

export const StyledErrorDepositWithdraw = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font: ${({ theme }) => theme.font.robotoLight};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textError};
  overflow: hidden;
`;
