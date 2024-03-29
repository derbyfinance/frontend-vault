import React, { FC, useEffect, useState } from 'react';
import seeMoreIcon from '@icons/seeMore.svg';
import Image from 'next/image';
import { IRaceLeaderboard } from 'types/race';
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
} from './Table.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: IRaceLeaderboard[];
};
const headers: string[] = ['NAME', 'MEDALS', 'STAKED', 'PERFORMANCE'];

const LeaderBoard: FC<TableProps> = ({ tableData }) => {
  const [sliceIndexLeaderBoard, setSliceIndexLeaderBoard] = useState<number>(5);

  const [leaderBoardSliceData, setLeaderBoardSliceData] =
    useState<IRaceLeaderboard[]>();

  useEffect(() => {
    setLeaderBoardSliceData(tableData?.slice(0, sliceIndexLeaderBoard));
  }, [tableData, sliceIndexLeaderBoard]);

  return (
    <StyledTableWrapper>
      <HeaderAndDesc
        header={'Leaderboard '}
        description={
          'Who are the best of the best. The 5 best are shown here as inspiration to follow. '
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
          {leaderBoardSliceData &&
            leaderBoardSliceData.map((rowData) => (
              <TableRow key={rowData.name} rowData={rowData} isVaultsPage />
            ))}
        </tbody>
      </StyledTable>
      {tableData?.length > 5 ? (
        <StyledSeeMore
          onClick={() => {
            leaderBoardSliceData?.length > 5
              ? setSliceIndexLeaderBoard((prev) => prev - 5)
              : setSliceIndexLeaderBoard((prev) => prev + 5);
          }}
        >
          {leaderBoardSliceData?.length > 5 ? 'Hide' : 'See more'}
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

export default LeaderBoard;
