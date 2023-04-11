import styled from 'styled-components';

export const AllocationComponentWrapper = styled.div`
  width: 100%;
  background: rgba(39, 117, 201, 0.05);
  padding: 31px 45px;
  margin: 0 0 50px 0;
`;

export const LineStyles = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(39, 117, 201, 0.05);
  padding: 31px 45px;
`;

export const StylesPercentBoxContainer = styled.div`
  display: flex;
  margin: 0 0 0 295px;
`;

export const StylesPercentBox = styled.div`
cursor:pointer;
  color: #fff;
  padding: 6px 8px;
  background: ${({ color }) => color};
  border-radius: 6px;
  display: flex;
  margin: 10px 0 0 10px;
`;
export const StylesOutlineButton = styled.button`
  cursor:${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
  background: #f4f8fc;
  margin: 47px 0 80px 0;
  width: 581px;
  height: 50px;
  border: 1px solid #6a7278;
  border-radius: 6px;
  font-family: 'Slab-Medium';
  font-size: 20px;
  line-height: 26px;
  color: #${({ disable }) => (disable ? 'D7D6D8' : '6a7278')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
