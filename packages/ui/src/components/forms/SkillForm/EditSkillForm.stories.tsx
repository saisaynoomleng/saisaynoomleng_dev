import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditSkillForm } from './EditSkillForm';
import { mockAction, mockSkill } from '#lib/mockData';
import { expect } from 'storybook/test';

const meta: Meta<typeof EditSkillForm> = {
  title: 'Forms/SkillForm/EditSkillForm',
  component: EditSkillForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Admin Dashboard: Edit Skill Form',
      },
    },
  },

  args: {
    action: mockAction,
    skills: mockSkill,
  },
  argTypes: {
    action: {
      control: false,
      description: 'Server Action to be rendered in Next.js',
    },

    skills: {
      control: false,
      description: 'Skills data from Sanity',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledForm: Story = {
  render: (args) => <EditSkillForm {...args} />,
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

    await userEvent.clear(name);
    await userEvent.clear(slug);
    await userEvent.clear(level);

    await userEvent.type(name, 'TypeScript & Zod');
    await userEvent.click(generate);
    await userEvent.type(level, '89');
    await userEvent.click(submit);

    await expect(mockAction).toHaveBeenCalledWith({
      name: 'TypeScript & Zod',
      slug: 'typescript-zod',
      level: 89,
    });
  },
};
