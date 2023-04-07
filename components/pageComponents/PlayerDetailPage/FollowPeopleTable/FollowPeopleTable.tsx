import React, { FC, useEffect, useState } from 'react';
import HeaderAndDesc from '@components/pageComponents/GamePageComponent/HeaderAndDesc/HeaderAndDesc';
import {
  StyledImageMargin,
  StyledSeeMore,
  StyledWiderBox,
} from '@components/pageComponents/GamePageComponent/index.styled';
import seeMoreIcon from '@icons/seeMore.svg';
import Image from 'next/image';
import { IRaceLeaderboard } from 'types/race';
import {
  StyledColumnHeader,
  StyledTable,
  StyledTableWrapper,
} from './FollowPeopleTable.styled';
import TableRow from './TableRow';

type TableProps = {
  tableData: IRaceLeaderboard[];
};
const headers: string[] = ['NAME', 'MEDALS', 'STAKED', 'PERFORMANCE'];

const FollowPeopleTable: FC<TableProps> = ({ tableData }) => {
  const [sliceIndexFollowPeople, setSliceIndexFollowPeople] =
    useState<number>(5);

  const [followPeopleSliceData, setFollowPeopleSliceData] =
    useState<IRaceLeaderboard[]>();

  useEffect(() => {
    setFollowPeopleSliceData(tableData?.slice(0, sliceIndexFollowPeople));
  }, [tableData, sliceIndexFollowPeople]);

  return (
    <StyledTableWrapper>
      <HeaderAndDesc
        header={'People you follow'}
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
          {followPeopleSliceData &&
            followPeopleSliceData.map((rowData) => (
              <TableRow key={rowData.name} rowData={rowData} />
            ))}
        </tbody>
      </StyledTable>
      {tableData?.length > 5 ? (
        <StyledSeeMore
          onClick={() => {
            followPeopleSliceData?.length > 5
              ? setSliceIndexFollowPeople((prev) => prev - 5)
              : setSliceIndexFollowPeople((prev) => prev + 5);
          }}
        >
          {followPeopleSliceData?.length > 5 ? 'Hide' : 'See more'}
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

export default FollowPeopleTable;
