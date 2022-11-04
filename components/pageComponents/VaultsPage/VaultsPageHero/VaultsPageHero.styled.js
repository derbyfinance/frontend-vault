import styled from 'styled-components';

export const StyledHeroContainer = styled.div`
  position: relative;
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 50px 46px 35px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderMain};
  border-radius: 6px;
  position: relative;
  overflow: hidden;
`;

export const StyledNetworkInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  gap: 26px;
`;

export const StyledNetworkTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledNetworkInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 62px;
`;

export const StyledInfoBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`;

export const StyledValuePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledValue = styled.h2`
  font-family: Slab-Medium;
  font-size: 32px;
  line-height: 37.5px;
`;
export const StyledDescription = styled.h4`
  font-size: 12px;
  color: ${({ theme }) => theme.textFaded};
`;

export const StyledIcon = styled.div`
  padding: 3px;
`;

export const StyledCircle = styled.div`
  position: absolute;
  right: -24px;
  top: 0;
`;

export const StyledNetworkIcon = styled.div`
  position: absolute;
  right: 70px;
  top: 30px;
`;

export const StyledChainsList = styled.div`
  position: absolute;
  top: 70px;
  left: 170px;
  z-index: 10;
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.borderMain};
  background: ${({ theme }) => theme.backgroundMain};
  padding: 15px 0;
  min-width: 300px;
`;

export const StyledChainWrapper = styled.div`
  padding: 0 15px;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.listHover};
  }
  &:last-child {
    & div {
      border: none;
    }
  }
`;

export const StyledChain = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.borderMain};
  padding: 15px 0;
  cursor: pointer;
  &:hover {
    & div {
      font-family: 'Roboto-Medium';
    }
  }
`;

export const StyledArrowIcon = styled.div`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

export const StyledSwitchTo = styled.h6`
  padding: 0 15px;
  font-family: 'Roboto-Medium';
  font-size: 12px;
  color: ${({ theme }) => theme.textFaded};
`;

export const StyledChainTitle = styled.div`
  font-family: 'Roboto-Light';
  font-size: 20px;
`;
