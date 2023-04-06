import React, { FC, useEffect, useState } from 'react';
import seeMoreIcon from '@icons/seeMore.svg';
import Image from 'next/image';
import { IRaceKeyStats, IRaceLeaderboard } from 'types/race';
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
} from './RaceTable.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: IRaceKeyStats[];
};
const headers: string[] = [
  'RACE',
  '#NFTS',
  'TOTAL STAKED',
  'PERFORMANCE',
  'REWARDS',
];

const RaceTable: FC<TableProps> = ({ tableData }) => {
  const [raceKeySliceData, setRaceKeySliceData] = useState<IRaceKeyStats[]>();

  const [sliceIndexRaceKey, setSliceIndexRaceKey] = useState<number>(3);

  useEffect(() => {
    setRaceKeySliceData(tableData?.slice(0, sliceIndexRaceKey));
  }, [sliceIndexRaceKey, tableData]);

  return (
    <StyledTableWrapper>
      <HeaderAndDesc
        header={'Key statistics'}
        description={
          'The most important data of this months game, use it to compare'
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
          {raceKeySliceData &&
            raceKeySliceData.map((rowData) => (
              <TableRow key={rowData.invested} rowData={rowData} isVaultsPage />
            ))}
        </tbody>
      </StyledTable>
      {tableData?.length > 3 ? (
        <StyledSeeMore
          onClick={() => {
            raceKeySliceData?.length > 3
              ? setSliceIndexRaceKey((prev) => prev - 3)
              : setSliceIndexRaceKey((prev) => prev + 3);
          }}
        >
          {raceKeySliceData?.length > 5 ? 'Hide' : 'See more'}
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

export default RaceTable;
