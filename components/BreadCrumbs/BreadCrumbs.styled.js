import styled from 'styled-components';

export const StyledBreadCrumbs = styled.div`
  font: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.breadCrumbs};
  & a {
    color: ${({ theme }) => theme.colors.breadCrumbs};
    &:hover {
      text-decoration: underline;
    }
  }
`;
