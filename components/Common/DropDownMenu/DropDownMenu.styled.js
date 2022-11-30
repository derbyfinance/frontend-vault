import styled from 'styled-components';

export const StyledDropDownMenu = styled.div`
  position: absolute;
  background: #ffffff;
  z-index: 999;
`;

export const StyledDropDownIcon = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  transform: ${({ isContentVisible }) =>
    isContentVisible ? 'rotate(180deg)' : 'none'};
  transition: 0.5s;
`;

export const StyledDropDownContent = styled.div`
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px 16px;
  position: absolute;
  transition: 1s;
`;
