import styled from 'styled-components';

export const StyledDropDownMenu = styled.div`
  position: relative;
  background: #ffffff;
`;

export const StyledDropDownIcon = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
  transition: 0.5s;
`;

export const StyledDropDownContent = styled.div`
  position: absolute;
`;
