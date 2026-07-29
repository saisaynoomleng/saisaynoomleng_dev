import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { InputImage } from './InputImage';

const meta: Meta<typeof InputImage> = {
  title: 'Components/Shared/InputImage',
  component: InputImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Input Image Form',
      },
    },
  },

  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <InputImage {...args} />,
};
