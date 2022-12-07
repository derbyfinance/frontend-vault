import styled from 'styled-components';

export const StyledWalletAddressBtn = styled.button`
color: ${({ theme }) => theme.colors.textMain};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.colors.tabDepositWithdrawActive};
  padding: 12px 18px;
  margin: 0;
  border-radius: 28px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.listHover};
  }
`;

export const StyledArrowContainer = styled.div`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
  transition: transform 0.3s ease-in-out;
`;

export const StyledAddressWrapper = styled.div`
  font: ${({ theme }) => theme.fonts.robotoBold};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 16px;
`;
