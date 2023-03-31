import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from './NavBar';

export default {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
} ;

export const Connected = {
  args: {
    isConnected: false
  },
};