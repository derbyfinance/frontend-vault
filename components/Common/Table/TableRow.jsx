import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import DepositWithdrawalModal from '@components/DepositWithdrawalModal/DepositWithdrawalModal';
import Image from 'next/image';
import React, { useState } from 'react';
import { StyledRowCell, StyledRowItem } from './Table.styled';

const TableRow = ({ rowData, isVaultsPage }) => {
  const { icon, coinName, coinShortName, balance, apy, members, tvl } = rowData;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <StyledRowItem>
      <StyledRowCell>
        <div>
          <Image src={icon} alt={coinShortName} height="64" width="64"></Image>
          <div>{coinName}</div> <span>{coinShortName}</span>
        </div>
      </StyledRowCell>
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
              setIsOpen={setIsOpen}
              APY={'5.43%'}
            />
          </>
        )}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
