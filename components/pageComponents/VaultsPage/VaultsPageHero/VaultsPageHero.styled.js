import styled from 'styled-components';

export const StyledHeroContainer = styled.div`
  position: relative;
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 50px 46px 35px;
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
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

export const StyledTitle = styled.h2``;

export const StyledArrowDown = styled.div``;

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
  font-size: 32px;
  line-height: 37.5px;
`;
export const StyledDescription = styled.h4`
  font-size: 12px;
  color: #a9a6ae;
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
  padding: 15px;
  border: 1px solid #e2e2e2;
  background: #fff;
`;

export const StyledChain = styled.div`
  border-bottom: 1px solid #e2e2e2;
  padding: 15px 25px;
`;

export const StyledArrowIcon = styled.div`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;
