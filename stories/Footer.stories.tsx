import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  isDark: false,
};
