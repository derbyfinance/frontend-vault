import styled from 'styled-components';

export const StyledDepositWithdrawalModalContainer = styled.div`
  height: 522px;
  width: 359px;
  position: relative;
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
  & > div {
    width: 100%;
    padding-bottom: 26px;
    text-align: center;
    cursor: pointer;
    color: ${({ financialActionType, theme }) =>
      financialActionType ? theme.colors.textMain : theme.colors.buttonActive};
  }

  & > div:first-child {
    color: ${({ financialActionType, theme }) =>
      financialActionType ? theme.colors.buttonActive : theme.colors.textMain};
    border-bottom: ${({ financialActionType, theme }) =>
      financialActionType ? `2px solid ${theme.colors.buttonActive}` : 'none'};
  }
  & > div:last-child {
    color: ${({ financialActionType, theme }) =>
      financialActionType ? theme.colors.textMain : theme.colors.buttonActive};
    border-bottom: ${({ financialActionType, theme }) =>
      financialActionType ? 'none' : `2px solid ${theme.colors.buttonActive}`};
  }
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
`;

export const StyledModalDepositButton = styled.div`
  padding: 28px 0px;
  text-align: center;
`;
