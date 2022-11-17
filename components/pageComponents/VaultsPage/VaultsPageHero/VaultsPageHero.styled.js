import styled from 'styled-components';

export const StyledHeroContainer = styled.div`
  position: relative;
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 50px 46px 35px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
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
  & div {
    font: ${({ theme }) => theme.font.slabMedium};
    font-size: 24px;
  }
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
  gap: 4px;
`;

export const StyledValuePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledValue = styled.div`
  font: ${({ theme }) => theme.font.slabMedium};
  font-size: 32px;
  line-height: 38px;
`;
export const StyledDescription = styled.h4`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledIcon = styled.div`
  padding: 4px;
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
  border: 1px solid ${({ theme }) => theme.colors.borderMain};
  background: ${({ theme }) => theme.colors.backgroundMain};
  padding: 16px 0;
  min-width: 300px;
`;

export const StyledChainWrapper = styled.div`
  padding: 0 16px;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.colors.listHover};
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  padding: 16px 0;
  cursor: pointer;
  &:hover {
    & div {
      font: ${({ theme }) => theme.font.robotoMedium};
      font-size: 20px;
    }
  }
`;

export const StyledArrowIcon = styled.div`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

export const StyledSwitchTo = styled.div`
  padding: 0 16px;
  font: ${({ theme }) => theme.font.robotoMedium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledChainTitle = styled.div`
  font: ${({ theme }) => theme.font.robotoLight};
  font-size: 20px;
`;
