import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args}>Click Me!</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary Button</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost Button</Button>,
};

export const Destructive: Story = {
  render: () => <Button variant="destructive">Destrutive Button</Button>,
};

export const Link: Story = {
  render: () => <Button variant="link">Link Button</Button>,
};
