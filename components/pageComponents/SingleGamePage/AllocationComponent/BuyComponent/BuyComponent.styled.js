import styled from 'styled-components';

export const BuyComponentWrapper = styled.div`
  width: 100%;
  padding: 30px 100px;
  border-top: 1px solid #e2e2e2;
`;

export const StyledHeader = styled.div`
  font-family: 'Slab-Medium';
  font-style: normal;
  font-size: 20px;
  color: #160344;
  margin: 20px 0 15px 0;
  & span {
    margin: 0 0 0 10px;
  }
`;

export const StyledDropDownNetwork = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 45px 60px;
  width: 770px;
  z-index: 20;
  margin: 10px 0 0 0;
`;

export const StyledColumnHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  :last-of-type {
    margin: 0 40px 0 0;
  }
`;

export const StyledColumnHeader = styled.div`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textFaded};
  padding: 0 10px 0 0;
  text-transform: uppercase;
`;

export const StyledColumnHeaderAllocated = styled.div`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textFaded};
  padding: 0 10px 0 0;
  text-transform: uppercase;
  margin: 0 0 0 250px;
`;

export const StyledRowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  &:hover {
    background: #f5f5f5;
  }
`;

export const StyleRowName = styled.div`
  font-family: 'Slab-Medium';
  font-size: 16px;
`;

export const StyleRowVaultName = styled.div`
  font-family: 'Slab-Medium';
  font-size: 16px;
  width: 100px;
`;

export const StyledRowCellName = styled.div`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  vertical-align: middle;
  padding: 12px 12px 12px 0px;
  display: flex;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
    font-family: 'Slab-Medium';
  }
`;
export const StyledRowCell = styled.div`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  vertical-align: middle;
  padding: 12px 12px 12px 0px;
`;

export const StyledCircleBorder = styled.div`
  border: 1px solid #e2e2e2;
  height: 64px;
  border-radius: 1000%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 0;
`;

export const StyledCircleAvatar = styled.div`
  width: 30px;
  border-radius: 50%;
  height: 30px;
  background-color: #26a17b;
`;

export const StyledTBody = styled.div`
  overflow: auto;
  overflow-y: scroll;
  display: block;
  height: 300px;
  padding: 0 40px 0 0;
  ::-webkit-scrollbar {
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5f08ee;
    border-radius: 6px;
  }
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.gradientMain};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Slab-Medium';
  border: none;
  outline: none;
  margin: 40px 0 0 0;
  float: right;
`;

export const StyledNetworkSelect = styled.div`
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  width: 581px;
  height: 50px;
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  & div {
    color: #959190;
    font-family: 'Slab-Medium';
  }
`;

export const StyledAddInputInfo = styled.div`
  color: #160344;
  font-family: 'Slab-Medium';
  display: flex;
  & span {
    margin: 0 10px 0 0;
  }
`;

