import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 64px;
  min-height: 100vh;
  // width: 1440px;
  background: ${({ theme }) => theme?.colors.backgroundMain};
  margin: 0 auto;
  // overflow: hidden;

  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;

export const ContainerWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto
`;

export const StyledTextNone= styled.div`
  background: #111823;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
`;

export const StyledTextWrapper= styled.div`
  width: 40vh;
  font: 'Roboto-Regular';
`;

export const StyledButton = styled.button`
  background: #C42A7C;
  color: '#ffff';
  border-radius: 28px;
  padding: 12px 20px;
  font-size: 20px;
  cursor: pointer;
  font: 'Roboto-Regular';
  border: none;
  outline: none;
  min-width: 208px;
  margin: 20px 0 0 0;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;