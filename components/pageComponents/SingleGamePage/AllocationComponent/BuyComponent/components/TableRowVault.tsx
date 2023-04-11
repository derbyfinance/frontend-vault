import React, { FC, useState } from 'react';
import { formatter } from '@helpers/helperFunctions';
import {
  StyledCircleBorder,
  StyledRowCell,
  StyledRowItem,
  StyledRowCellName,
  StyleRowVaultName,
} from '../BuyComponent.styled';
import Checkbox from './Checkbox';

type TableRowType = {
  rowData: any;
  changeVaultCheckbox:Function
};

const TableRowVault: FC<TableRowType> = ({ rowData, changeVaultCheckbox }) => {
  const { name, allocated, checked, performance, id } = rowData;

  return (
    <StyledRowItem>
      <StyledRowCellName>
      <Checkbox
          value={checked}
          checked={checked}
          onChange={()=> changeVaultCheckbox(id)}
          id={id}
          name={id}
        />
        <div>
          <StyledCircleBorder>
            {/* <StyledCircleAvatar></StyledCircleAvatar> */}
          </StyledCircleBorder>
          <StyleRowVaultName>{name}</StyleRowVaultName>
        </div>
      </StyledRowCellName>
      <StyledRowCell>{formatter.format(allocated)}</StyledRowCell>
      <StyledRowCell>{performance}</StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRowVault;
