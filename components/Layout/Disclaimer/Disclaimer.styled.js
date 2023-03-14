import styled from 'styled-components';

export const StyledTextNone = styled.div`
  background: #fff;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #160344;
  font: Roboto-Light;
  font-weight: 300;
  line-height: 30px;
`;

export const StyledTextWrapper = styled.div`
  width: 340px;
  margin: 0 0 60px 0;
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.gradientMain};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 6px;
  padding: 12px 20px;
  font: ${({ theme }) => theme.fonts.slabMedium};
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  min-width: 208px;
  margin: 0 0 30px 0;
`;

export const StyledButtonOutlined = styled.button`
  border: 1px solid #39079b;
  background: #fff;
  color: #39079b;
  border-radius: 6px;
  padding: 12px 20px;
  font-size: 20px;
  cursor: pointer;
  font-family: 'Slab-Light';
  font-weight: 300;
  min-width: 208px;
`;
