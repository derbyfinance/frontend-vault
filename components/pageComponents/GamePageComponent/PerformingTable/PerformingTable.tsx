import React, { FC, useEffect, useState } from 'react';
import seeMoreIcon from '@icons/seeMore.svg';
import Image from 'next/image';
import { IRaceBestPerformingVaults } from 'types/race';
import HeaderAndDesc from '../HeaderAndDesc/HeaderAndDesc';
import {
  StyledImageMargin,
  StyledSeeMore,
  StyledWiderBox,
} from '../index.styled';
import {
  StyledColumnHeader,
  StyledTable,
  StyledTableWrapper,
} from './PerformingTable.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: IRaceBestPerformingVaults[];
};
const headers: string[] = ['NAME', 'ALLOCATED', 'PERFORMANCE'];

const PerformingTable: FC<TableProps> = ({ tableData }) => {
  const [performingVaultsSliceData, setPerformingVaultsSliceData] =
    useState<IRaceBestPerformingVaults[]>();

  const [sliceIndexPerformingVaults, setSliceIndexPerformingVaults] =
    useState<number>(5);

  useEffect(() => {
    setPerformingVaultsSliceData(
      tableData?.slice(0, sliceIndexPerformingVaults),
    );
  }, [tableData, sliceIndexPerformingVaults]);

  return (
    <StyledTableWrapper>
      <HeaderAndDesc
        header={'Best Performing Vaults '}
        description={
          'Who are the best of the best. The 5 best are shown here as inspiration to follow.'
        }
      />
      <StyledTable>
        <thead>
          <tr>
            {headers.map((header) => (
              <StyledColumnHeader key={header}>{header}</StyledColumnHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {performingVaultsSliceData &&
            performingVaultsSliceData.map((rowData) => (
              <TableRow key={rowData.performance} rowData={rowData} isVaultsPage />
            ))}
        </tbody>
      </StyledTable>
      {tableData?.length > 5 ? (
        <StyledSeeMore
          onClick={() => {
            performingVaultsSliceData?.length > 5
              ? setSliceIndexPerformingVaults((prev) => prev - 5)
              : setSliceIndexPerformingVaults((prev) => prev + 5);
          }}
        >
          {performingVaultsSliceData?.length > 5 ? 'Hide' : 'See more'}
          <StyledImageMargin>
            <Image src={seeMoreIcon} alt={'see more'} />
          </StyledImageMargin>
        </StyledSeeMore>
      ) : (
        <StyledWiderBox />
      )}
    </StyledTableWrapper>
  );
};

export default PerformingTable;
