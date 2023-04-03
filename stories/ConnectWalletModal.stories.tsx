import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ConnectWalletModal from './ConnectWalletModal';

export default {
  title: 'Example/ConnectWalletModal',
  component: ConnectWalletModal,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Open = {
  args: {
    isOpen: true,
  },
};
export const Close = {
  args: {
    onClose: false,
  },
};
export const Detected = {
  args: {
    walletDetected: true,
    isOpen: true,
  },
};
export const UnDetected = {
  args: {
    walletDetected: false,
    isOpen: true,
  },
};
