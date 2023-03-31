import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ConnectWalletModal from './ConnectWalletModal';

export default {
  title: 'Example/ConnectWalletModal',
  component: ConnectWalletModal,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ConnectWalletModal>;

const Template: ComponentStory<typeof ConnectWalletModal> = (args) => (
  <ConnectWalletModal {...args} />
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
export const Close = Template.bind({});
Close.args = {
  onClose: false,
};
