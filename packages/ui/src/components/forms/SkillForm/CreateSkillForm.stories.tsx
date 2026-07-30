import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateSkillForm } from './CreateSkillForm';
import { mockAction } from '#lib/mockData';
import { expect } from 'storybook/test';

const meta: Meta<typeof CreateSkillForm> = {
  title: 'Forms/SkillForm/CreateSkillForm',
  component: CreateSkillForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Admin Dashboard: Create Skill Form`,
      },
    },
  },

  args: {
    action: mockAction,
  },
  argTypes: {
    action: {
      control: false,
      description: 'Server Action to be rendered in Next.js',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FillForm: Story = {
  render: (args) => <CreateSkillForm {...args} />,
  play: async ({ canvas, userEvent }) => {
    const name = canvas.getByLabelText(/name/i);
    const slug = canvas.getByLabelText(/slug/i);
    const level = canvas.getByLabelText(/level/i);
    const generate = canvas.getByRole('button', { name: /generate/i });
    const submit = canvas.getByRole('button', { name: /publish/i });

    await expect(name).toBeInTheDocument();
    await expect(slug).toBeInTheDocument();
    await expect(level).toBeInTheDocument();
    await expect(generate).toBeInTheDocument();
    await expect(submit).toBeInTheDocument();

    await userEvent.type(name, 'TypeScript');
    await userEvent.click(generate);
    await userEvent.type(level, '99');
    await userEvent.click(submit);

    await expect(mockAction).toHaveBeenCalledWith({
      name: 'TypeScript',
      slug: 'typescript',
      level: 99,
    });
  },
};
