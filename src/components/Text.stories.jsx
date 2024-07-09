// src/components/Text.stories.jsx
import React from 'react';
import Text from './Text';

export default {
  title: 'Example/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Hello, Storybook!',
};

export const Custom = Template.bind({});
Custom.args = {
  content: 'This is a custom text component.',
};
