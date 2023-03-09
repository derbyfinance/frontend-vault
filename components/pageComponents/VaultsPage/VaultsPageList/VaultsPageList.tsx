import React, { FC } from 'react';
import Table from '@components/Common/Table/Table';
import { IVaultData } from 'types/stats';
import { StyledCoinsListHeader } from './VaultsPageList.styled';

const headers: string[] = ['Assets', 'Wallet balance', 'APY', 'Members', 'TVL'];

type VaultsPageListPropType = {
  tableData: IVaultData[];
};

const VaultsPageList: FC<VaultsPageListPropType> = ({ tableData }) => {
  return (
    <>
      <StyledCoinsListHeader>Explore available vaults.</StyledCoinsListHeader>
      <Table tableData={tableData} headers={headers} />
    </>
  );
};

export default VaultsPageList;
