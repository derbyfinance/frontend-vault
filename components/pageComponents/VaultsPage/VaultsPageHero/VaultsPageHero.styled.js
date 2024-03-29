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
  min-width: 700px
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
  & h2 {
    font: ${({ theme }) => theme.fonts.slabMedium};
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
  font: ${({ theme }) => theme.fonts.slabMedium};
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

export const StyledNetworkIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
`;

export const StyledCircle = styled.div`
  & img {
    height: 180px !important;
  }
  position: relative;
  right: -24px;
  overflow: hidden;
`;

export const StyledNetworkIcon = styled.div`
  & img {
    transform: rotate(9deg);
  }
  position: absolute;
  right: 65px;
  top: 30px;
`;

export const StyledChainsList = styled.div`
position: absolute;
// right:0px;
  top: 10px;
  left: -150px;
  z-index: 200;
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
      font: ${({ theme }) => theme.fonts.robotoMedium};
      font-size: 20px;
    }
  }
`;

export const StyledSwitchTo = styled.div`
  padding: 0 16px;
  font: ${({ theme }) => theme.fonts.robotoMedium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textFaded};
`;

export const StyledChainTitle = styled.div`
  font: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 20px;
`;

export const StyledBoxBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  opacity: .8;
  overflow:hidden;
  height 180px;
`;

export const StyledEmptyDiv = styled.div`

`;