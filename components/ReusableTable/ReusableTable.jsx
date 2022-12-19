import React from 'react';
import {
  StyledColumnReusableHeader,
  StyledReusableTable,
} from './ReusableTable.styled';
import TableReusableRow from './TableReusableRow';

const ReusableTable = ({ data, headers }) => {
  return (
    <StyledReusableTable>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <StyledColumnReusableHeader key={i}>
              {header}
            </StyledColumnReusableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => (
          <TableReusableRow key={rowData.id} rowData={rowData} />
        ))}
      </tbody>
    </StyledReusableTable>
  );
};

export default ReusableTable;
