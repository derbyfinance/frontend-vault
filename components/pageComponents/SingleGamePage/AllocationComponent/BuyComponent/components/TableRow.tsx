import React, { FC, useEffect, useState } from 'react';
import { formatter } from '@helpers/helperFunctions';
import {
  StyleRowName,
  StyledCircleAvatar,
  StyledCircleBorder,
  StyledRowCell,
  StyledRowItem,
  StyledRowCellName
} from '../BuyComponent.styled';
import Checkbox from './Checkbox';

type TableRowType = {
  rowData: any;
  changeNetworkCheckbox: Function;
};

const TableRow: FC<TableRowType> = ({ rowData, changeNetworkCheckbox }) => {
  const { name, allocated, checked, id } = rowData;



  return (
    <StyledRowItem>
      <StyledRowCellName>
      <Checkbox
          value={checked}
          checked={checked}
          onChange={()=> changeNetworkCheckbox(id)}
          id={id}
          name={id}
        />
        <div>
          <StyledCircleBorder>
            {/* <StyledCircleAvatar></StyledCircleAvatar> */}
          </StyledCircleBorder>
          <StyleRowName>{name}</StyleRowName>
        </div>
      </StyledRowCellName>
      <StyledRowCell>{formatter.format(allocated)}</StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
