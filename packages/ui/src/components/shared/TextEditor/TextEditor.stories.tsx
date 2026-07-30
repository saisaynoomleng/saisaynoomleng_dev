import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextEditor } from './TextEditor';

const meta: Meta<typeof TextEditor> = {
  title: 'Components/Shared/TextEditor',
  component: TextEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Text Editor for Block Text Form',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TextEditor />,
};
