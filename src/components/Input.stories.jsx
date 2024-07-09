// src/components/Input.stories.jsx
import React from 'react';
import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  placeholder: 'Default Input',
  value: '',
  onChange: (e) => console.log(e.target.value),
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  placeholder: 'Outlined Input',
  value: '',
  onChange: (e) => console.log(e.target.value),
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  placeholder: 'Filled Input',
  value: '',
  onChange: (e) => console.log(e.target.value),
  disabled: false,
};

export const DisabledDefault = Template.bind({});
DisabledDefault.args = {
  variant: 'default',
  placeholder: 'Disabled Default Input',
  value: '',
  onChange: (e) => console.log(e.target.value),
  disabled: true,
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  variant: 'outlined',
  placeholder: 'Disabled Outlined Input',
  value: '',
  onChange: (e) => console.log(e.target.value),
  disabled: true,
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
  variant: 'filled',
  placeholder: 'Disabled Filled Input',
  value: '',
  onChange: (e) => console.log(e.target.value),
  disabled: true,
};
