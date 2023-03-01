import DepositWithdrawalModal from '@components/DepositWithdrawalModal/DepositWithdrawalModal';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StyledRowCell, StyledRowItem, StyledAdd, StyledCoinShortName } from './Table.styled';
import Link from 'next/link';

const TableRow = ({ rowData, isVaultsPage }) => {
  const router = useRouter();
  const { icon, coinName, coinShortName, balance, apy, members, tvl } = rowData;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  }

  const closeModal = () => setIsOpen(false);

  return (
    <StyledRowItem>
      <Link href={`/vaults/${coinShortName}`}>
        <StyledRowCell>
          <div>
            <Image src={icon} alt={coinShortName} height="40" width="40"></Image>
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
            <StyledAdd onClick={openModal}>+</StyledAdd>
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
