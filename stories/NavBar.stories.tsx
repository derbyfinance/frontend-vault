import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';

export default {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Connected = Template.bind({});
Connected.args = {
  isConnected: true,
};
export const Disconnected = Template.bind({});
Disconnected.args = {
  isConnected: false,
};

export const OpenModal = Template.bind({});
OpenModal.args = {
  open: true,
};

export const CloseModal = Template.bind({});
CloseModal.args = {
  open: false,
};
