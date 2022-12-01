import styled from 'styled-components';

export const StyledWalletMenuContent = styled.div`
  margin-top: 12px;
  background: ${({ theme }) => theme.colors.backgroundMain};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 28px;
  padding: 30px 14px;
`;

export const StyledAddressAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const StyledConnectedWith = styled.div`
  text-align: center;
  font: ${({ theme }) => theme.fonts.robotoLight};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 20px;
  padding: 18px 0;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 24px;
`;

export const StyledButtonWalletMenu = styled.button`
  background: #f5f5f5;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 28px;
  padding: 12px 16px;
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 20px;
  min-width: 130px;
  border: 0.5px solid ${({ theme }) => theme.colors.borderFaded};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundMain};
  }
`;

export const StyledWalletRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderMain};
  &:last-child {
    padding-bottom: 0;
  }
`;

export const StyledRowIcon = styled.div`
  position: relative;
  height: 24px;
  width: 24px;
`;

export const StyledRowText = styled.div`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 20px;
`;

export const StyledRowOnline = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  & > div {
    align-self: center;
    margin: 0 auto;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.online};
  }
`;