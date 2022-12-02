import styled from 'styled-components';

export const StyledWalletAddressBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: ${({ theme }) => theme.colors.backgroundButton};
  border: 1px solid ${({ theme }) => theme.colors.tabDepositWithdrawActive};
  padding: 12px 18px;
  margin: 0;
  border-radius: 28px;
`;

export const StyledArrowContainer = styled.div`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
  transition: transform 0.3s ease-in-out;
`;

export const StyledAddressWrapper = styled.div`
  font: ${({ theme }) => theme.fonts.robotoBold};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 20px;
`;
