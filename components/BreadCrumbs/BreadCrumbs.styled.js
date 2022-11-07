import styled from 'styled-components';

export const StyledBreadCrumbs = styled.div`
  font-family: 'Roboto-Light';
  font-size: 16px;
  color: ${({ theme }) => theme.breadCrumbs};
  & a {
    color: ${({ theme }) => theme.breadCrumbs};
    &:hover {
      text-decoration: underline;
    }
  }
`;
