import React, { useState } from 'react';
import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import ArrowDownComponent from '@components/UI/ArrowDownComponent';
import { useAccount } from 'wagmi';
import WalletAddressButton from './WalletAddressButton/WalletAddressButton';
import WalletDropdown from './WalletDropdown/WalletDropdown';

const ConnectedWalletAddress = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { address } = useAccount();

  return (
    <>
      <DropDownMenu
        dropDownButton={<WalletAddressButton address={address} open={open} />}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
      >
        {open && <WalletDropdown address={address} />}
      </DropDownMenu>
    </>
  );
};

export default ConnectedWalletAddress;
