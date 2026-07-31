import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditAboutForm } from './EditAboutForm';
import { mockAboutData, mockAction } from '#lib/mockData';

const meta: Meta<typeof EditAboutForm> = {
  title: 'Forms/AboutForm/EditAboutForm',
  component: EditAboutForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin Dashboard: Edit About Form',
      },
    },
  },

  args: {
    action: mockAction,
    about: mockAboutData,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
