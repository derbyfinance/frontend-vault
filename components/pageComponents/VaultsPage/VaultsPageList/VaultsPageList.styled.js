import styled from 'styled-components';

export const StyledCoinsListHeader = styled.div`
  color: ${({ theme }) => theme.colors.colorTableLabel};
  font: ${({ theme }) => theme.fonts.robotoRegular};
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 23px;
  margin: 20px 0 50px 0;
`;

export const StyledCoinsListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundForTable};
  padding: 30px;
  border-radius: 28px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);
  font-family: 'Roboto-Regular';
`;
