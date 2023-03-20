import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledColumnHeader = styled.th`
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 16px;
  text-align:left;
  color: ${({ theme }) => theme.colors.textFaded};
  padding: 0 10px 0 0;
  @media only screen and (max-width: 1134px) {
    font-size: 14px;
  }
`;

export const StyledRowItem = styled.tr`
  vertical-align: middle;
  border-collapse: collapse;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  &:hover {
    background: #f5f5f5;
  }
`;

export const StyledRowCell = styled.td`
  font: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 16px;
  vertical-align: middle;
  padding: 12px 12px 12px 0px;
  & div {
    display: flex;
    align-items: center;
    font: ${({ theme }) => theme.fonts.slabMedium};
  }
  & span {
    font: ${({ theme }) => theme.fonts.robotoRegular};
    color: ${({ theme }) => theme.colors.textFaded};
    margin: 0 0 0 10px;

  }
`;

export const StyledAdd = styled.div`
  cursor: pointer;
  font-size: 16px;
`;

export const StyledCircleBorder = styled.div`
  border: 1px solid #e2e2e2;
  height: 64px;
  border-radius: 1000%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 0;
`;

export const StyledThreeDots = styled.button`
  background: #fff;
  cursor: pointer;
  border: none;
  outline: none;
`;
