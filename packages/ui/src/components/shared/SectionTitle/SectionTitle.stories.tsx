import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionTitle } from './SectionTitle';
import { expect } from 'storybook/test';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/Shared/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Title for sections',
      },
    },
  },

  args: {
    as: 'h3',
    label: 'About Me',
    size: 'sm',
  },

  argTypes: {
    as: {
      control: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        type: {
          summary: `Section's heading element`,
          detail: `
            'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          `,
        },
      },
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    label: {
      control: 'text',
      description: 'Title text',
    },

    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      table: {
        type: {
          summary: `Default font sizes of the title`,
          detail: `
            sm: 'text-fs-500 md:text-fs-600 lg:text-fs-700',
            md: 'text-fs-600 md:text-fs-700 lg:text-fs-800',
            lg: 'text-fs-700 md:text-fs-800 lg:text-fs-900',
          `,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SectionTitle {...args} />,
  play: async ({ canvas }) => {
    const title = canvas.getByText(/about me/i);

    await expect(title).toHaveTextContent('About Me');
    await expect(title?.tagName).toBe('H3');
  },
};

export const Heading2: Story = {
  render: (args) => <SectionTitle {...args} as="h2" />,
  play: async ({ canvas }) => {
    const title = canvas.getByText(/about me/i);

    await expect(title).toHaveTextContent('About Me');
    await expect(title?.tagName).toBe('H2');
  },
};
