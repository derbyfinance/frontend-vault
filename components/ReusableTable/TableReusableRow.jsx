import React from 'react';
import {
  currencyFormatter,
  percentageFormatter,
} from '@helpers/helperFunctions';
import Image from 'next/image';
import {
  StyledImageCont,
  StyledReusableRowItem,
  StyledRowReusableCell,
} from './ReusableTable.styled';

const TableReusableRow = ({ rowData }) => {
  console.log(rowData);
  return (
    <StyledReusableRowItem>
      <StyledRowReusableCell>
        <div>
          <StyledImageCont>
            {<Image src={rowData.icon} height={24} width={24} />}
          </StyledImageCont>
          <div>{rowData.name}</div>
          <span>{rowData.network}</span>
        </div>
      </StyledRowReusableCell>
      <StyledRowReusableCell>{rowData.protocol}</StyledRowReusableCell>
      <StyledRowReusableCell>
        {percentageFormatter(rowData.weight)}
      </StyledRowReusableCell>
      <StyledRowReusableCell>
        {currencyFormatter(rowData.value)}
      </StyledRowReusableCell>
    </StyledReusableRowItem>
  );
};

export default TableReusableRow;
