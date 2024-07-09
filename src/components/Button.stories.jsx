// src/components/Button.stories.jsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  onClick: () => alert('Primary Button Clicked'),
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  onClick: () => alert('Secondary Button Clicked'),
  disabled: false,
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  label: 'Disabled Primary Button',
  variant: 'primary',
  onClick: () => alert('This should not appear'),
  disabled: true,
};

export const DisabledSecondary = Template.bind({});
DisabledSecondary.args = {
  label: 'Disabled Secondary Button',
  variant: 'secondary',
  onClick: () => alert('This should not appear'),
  disabled: true,
};
