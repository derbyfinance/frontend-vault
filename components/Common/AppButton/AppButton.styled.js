import styled from 'styled-components';

const StyledAppButton = styled.button`
  background:  ${({ theme }) => theme.colors.gradientMain};
  font: ${({ theme }) => theme.font?.slabRegular};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  padding: 12px 20px;
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 16px;
  cursor: pointer;
  font-family: 'Roboto-Bold';
  border: none;
  outline: none;
  min-width: 208px;

  @media only screen and (max-width: 1010px) {
    min-width: 150px;
    font-size: 14px;
  }
  :disabled {
    background: #E5E5E5
  }

`;


export default StyledAppButton;
