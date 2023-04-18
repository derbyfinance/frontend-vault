import styled from 'styled-components';

export const GamePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 0 24px;
  position: relative;
  width: 100%;
`;

export const GamePageContainer = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-top: 1px solid #e2e2e2;
  position: relative;
  width: 100%;
`;

export const GamePageBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameDescriptionContainer = styled.div`
  width: 800px;
`;

export const StyledSeeMore = styled.div`
  cursor: pointer;
  margin: 10px 0 60px 0;
  background-color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 23px;
  color: #2775c9;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;
export const StyledWiderBox = styled.div`
  margin: 30px 0;
`;

export const StyledImageMargin = styled.div`
  margin: 5px 0 0 3px;
`;
