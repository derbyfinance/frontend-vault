import React, { FC, useEffect, useRef, useState } from 'react';
import DropDownMenu from '@components/Common/DropDownMenu/DropDownMenu';
import { useAccount } from 'wagmi';
import { StyledDiv } from './ConnectedWalletAddress.styled';
import WalletAddressButton from './WalletAddressButton/WalletAddressButton';
import WalletDropdown from './WalletDropdown/WalletDropdown';

type ConnectedWalletAddressPropsType = {
  openModal: Function;
};

const ConnectedWalletAddress: FC<ConnectedWalletAddressPropsType> = ({
  openModal,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { address } = useAccount();
  const refOnWalletDropdown = useRef(null);

  useEffect(() => {
    document.addEventListener('click', clickHandler, true);
  });

  const clickHandler: EventListener = (e: MouseEvent) => {
    if (
      refOnWalletDropdown.current !== null &&
      !refOnWalletDropdown.current?.contains(e.target)
    ) {
      onClose();
    }
  };

  return (
    <StyledDiv ref={refOnWalletDropdown}>
      <DropDownMenu
        dropDownButton={<WalletAddressButton address={address} open={open} />}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
      >
        {open && <WalletDropdown address={address} openModal={openModal} />}
      </DropDownMenu>
    </StyledDiv>
  );
};

export default ConnectedWalletAddress;
