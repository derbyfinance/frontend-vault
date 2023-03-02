import React, { FC, useState } from 'react';
import DepositWithdrawalModal from '@components/DepositWithdrawalModal/DepositWithdrawalModal';
import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { TableDataType } from 'types/table/tableDataTypes';
import {
  StyledAdd,
  StyledCoinShortName,
  StyledRowCell,
  StyledRowItem,
} from './Table.styled';
import { AddMoneyToVaultBtn } from '../MainButton/MainButton.styled';

type TableRowType = {
  rowData: TableDataType;
  isVaultsPage: boolean;
};

const TableRow: FC<TableRowType> = ({ rowData, isVaultsPage }) => {
  const router: NextRouter = useRouter();
  const { icon, coinName, coinShortName, balance, apy, members, tvl } = rowData;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (e: Event) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <StyledRowItem>
      <Link href={`/vaults/${coinShortName}`}>
        <StyledRowCell>
          <div>
            <Image
              src={icon}
              alt={coinShortName}
              height="40"
              width="40"
            ></Image>
            <StyledCoinShortName>{coinShortName}</StyledCoinShortName>
          </div>
        </StyledRowCell>
      </Link>
      <StyledRowCell>{balance}</StyledRowCell>
      <StyledRowCell>{apy}</StyledRowCell>
      <StyledRowCell>{members}</StyledRowCell>
      <StyledRowCell>{tvl}</StyledRowCell>
      <StyledRowCell>
        {isVaultsPage && (
          <>
            <AddMoneyToVaultBtn onClick={openModal}>+ Add</AddMoneyToVaultBtn>
            <DepositWithdrawalModal
              isOpen={isOpen}
              onClose={closeModal}
            />
          </>
        )}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
