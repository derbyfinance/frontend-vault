import styled from 'styled-components';

export const StyledDropDownMenu = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.backgroundMain};
`;

export const StyledDropDownIcon = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
`;

export const StyledDropDownContent = styled.div`
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  z-index: 10;
`;
