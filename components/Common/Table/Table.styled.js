

import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledColumnHeader = styled.th`
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textFaded};

  @media only screen and (max-width: 1134px) {
    font-size: 14px;
  }
`;

export const StyledRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
`;

export const StyledRowCell = styled.td`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 18px;
  vertical-align: middle;
  padding: 12px;
  & div {
    display: flex;
    align-items: center;
    gap: 12px;
    font: ${({ theme }) => theme.fonts.slabMedium};
    font-size: 20px;

    @media only screen and (max-width: 1134px) {
      gap: 5px;
    }
    & span {
      font: ${({ theme }) => theme.fonts.robotoMedium};
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textFaded};
    }
  }

  @media only screen and (max-width: 1134px) {
    padding: 8px;
    font-size: 16px;
  }
`;

export const StyledAdd = styled.div`
  cursor:pointer;
  font-size: 16px;
`;

export const StyledCoinShortName = styled.span`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textWalletInfo};
`;
