import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextareaWithCount } from './TextareaWithCounts';
import { expect } from 'storybook/test';

const meta: Meta<typeof TextareaWithCount> = {
  title: 'Components/Shared/TextareaWithCounts',
  component: TextareaWithCount,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Textarea with number of character count`,
      },
    },
  },

  args: {
    maxLength: 2000,
  },
  argTypes: {
    maxLength: {
      control: 'number',
      description: 'Determine the maximum number of character textarea accept',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    id: {
      control: 'text',
      description: 'ID to connect with the form label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <TextareaWithCount {...args} />,
  play: async ({ canvas, userEvent }) => {
    const textarea = canvas.getByRole('textbox');

    await expect(textarea).toBeInTheDocument();

    await userEvent.type(textarea, 'Test text box');

    await expect(canvas.getByText('13 / 2000')).toBeInTheDocument();
    await expect(textarea).toHaveValue('Test text box');
  },
};

export const MaxLength10: Story = {
  render: (args) => <TextareaWithCount {...args} maxLength={10} />,
};
