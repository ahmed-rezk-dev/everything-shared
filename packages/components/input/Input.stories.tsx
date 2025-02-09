import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'MyButton',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
  },
  args: {
    placeholder: 'Write some stuff...',
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherExample: Story = {
  args: {
    placeholder: 'Write some stuff...',
  },
};
