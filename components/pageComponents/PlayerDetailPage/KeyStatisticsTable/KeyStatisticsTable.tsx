import React, { FC, useEffect, useState } from 'react';
import HeaderAndDesc from '@components/pageComponents/GamePageComponent/HeaderAndDesc/HeaderAndDesc';
import {
  StyledImageMargin,
  StyledSeeMore,
  StyledWiderBox,
} from '@components/pageComponents/GamePageComponent/index.styled';
import seeMoreIcon from '@icons/seeMore.svg';
import Image from 'next/image';
import { IRaceKeyStats } from 'types/race';
import {
  StyledColumnHeader,
  StyledTable,
  StyledTableWrapper,
} from './KeyStatisticsTable.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: IRaceKeyStats[];
};
const headers: string[] = [
  'RACE',
  'staked #',
  'Rewards',
  'Performance',
  'RANK',
  'medals',
];

const KeyStatisticsTable: FC<TableProps> = ({ tableData }) => {
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
            raceKeySliceData.map((rowData, index) => (
              <TableRow
                key={rowData.invested}
                rowData={rowData}
                index={index}
              />
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

export default KeyStatisticsTable;
