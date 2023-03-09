import React, { FC, useState } from 'react';
import DepositWithdrawalModal from '@components/DepositWithdrawalModal/DepositWithdrawalModal';
import threeDots from '@images/threeDots.svg';
import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { TableDataType } from 'types/table/tableDataTypes';
import { useAccount } from 'wagmi';
import { AddMoneyToVaultBtn } from '../MainButton/MainButton.styled';
import {
  StyledCircleBorder,
  StyledRowCell,
  StyledRowItem,
  StyledThreeDots,
} from './Table.styled';

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

  const { isConnected } = useAccount();

  return (
    <StyledRowItem>
      <Link href={`/vaults/${coinShortName}`}>
        <StyledRowCell>
          <div>
            <StyledCircleBorder>
              <Image
                src={icon}
                alt={coinShortName}
                height="24"
                width="24"
              ></Image>
            </StyledCircleBorder>
            <div>{coinName}</div> <span>{coinShortName}</span>
          </div>
        </StyledRowCell>
      </Link>
      <Link href={`/vaults/${coinShortName}`}>
        <StyledRowCell>{balance}</StyledRowCell>
      </Link>
      <Link href={`/vaults/${coinShortName}`}>
        <StyledRowCell>{apy}</StyledRowCell>
      </Link>
      <Link href={`/vaults/${coinShortName}`}>
        <StyledRowCell>{members}</StyledRowCell>
      </Link>
      <Link href={`/vaults/${coinShortName}`}>
        <StyledRowCell>{tvl}</StyledRowCell>
      </Link>
      <StyledRowCell>
        {isVaultsPage && (
          <>
            {isConnected ? (
              <StyledThreeDots onClick={openModal}>
                <Image src={threeDots} alt={'settings'} height={22}></Image>
              </StyledThreeDots>
            ) : (
              <AddMoneyToVaultBtn onClick={openModal}>+ Add</AddMoneyToVaultBtn>
            )}
            <DepositWithdrawalModal isOpen={isOpen} onClose={closeModal} />
          </>
        )}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
