import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width:500px;
  @media only screen and (max-width: 1000px) {
    width:700px;
  }
`;

export const StyledColumnHeader = styled.th`
  // text-align: left;
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
`;

export const StyledRowCell = styled.td`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 16px;
  vertical-align: middle;
  padding: 12px;
  & div {
    display: flex;
    align-items: center;
    gap: 12px;
    font: ${({ theme }) => theme.fonts.slabMedium};
    font-size: 20px;
  }
`;

export const StyledAdd = styled.td`
  cursor:pointer;
  font-size: 16px;
`;

export const StyledCoinShortName = styled.span`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textWalletInfo};
`;
