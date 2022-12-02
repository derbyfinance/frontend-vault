import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import { useAccount } from 'wagmi';
import WalletAddressButton from './WalletAddressButton/WalletAddressButton';
import WalletDropdown from './WalletDropdown/WalletDropdown';
import React, { useState } from 'react';

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
