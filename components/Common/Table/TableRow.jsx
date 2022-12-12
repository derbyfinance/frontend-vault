import { AddMoneyToVaultBtn } from '@components/Common/MainButton/MainButton.styled';
import DepositWithdrawalModal from '@components/DepositWithdrawalModal/DepositWithdrawalModal';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StyledRowCell, StyledRowItem } from './Table.styled';

const TableRow = ({ rowData, isVaultsPage }) => {
  const router = useRouter();
  const { icon, coinName, coinShortName, balance, apy, members, tvl } = rowData;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <StyledRowItem onClick={() => router.push(`/vaults/${coinShortName}`)}>
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
              APY={apy}
            />
          </>
        )}
      </StyledRowCell>
    </StyledRowItem>
  );
};

export default TableRow;
