import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bounded } from './Bounded';
import { expect } from 'storybook/test';

const meta: Meta<typeof Bounded> = {
  title: 'Components/Shared/Bounded',
  component: Bounded,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Wrapper Component',
      },
    },
  },

  args: {
    as: 'section',
    padding: 'sm',
    size: 'md',
    isCentered: true,
    spacing: 'none',
  },
  argTypes: {
    as: {
      control: false,
      description: 'Wrapper Element type, default to SECTION',
    },

    children: {
      control: false,
      description: 'React Node',
    },

    className: {
      control: 'text',
      description: 'Additional TailwindCSS classes',
    },

    padding: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg'],
      table: {
        type: {
          summary: 'Default Horizontal paddings',
          detail: `
              none: '',
              sm: 'py-2 px-4 md:px-6 lg:px-8',
              md: 'py-4 px-6 md:px-8 lg:px-10',
              lg: 'py-6 px-8 md:px-10 lg:px-12',
          `,
        },
      },
    },

    size: {
      control: 'radio',
      options: ['sm', 'md', 'full'],
      table: {
        type: {
          summary: "Maximum wrapper component's width",
          detail: `
            sm: 'max-w-2xl',
            md: 'max-w-4xl',
            full: 'max-w-none',
          `,
        },
      },
    },

    isCentered: {
      control: 'boolean',
      description: 'Whether the screens need to be centered or not',
    },

    spacing: {
      control: 'radio',
      options: ['none', 'sm', 'md', 'lg'],
      table: {
        type: {
          summary: `Verical Space between the children elements`,
          detail: `
              none: '',
              sm: 'space-y-6',
              md: 'space-y-8',
              lg: 'space-y-10',
          `,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Bounded {...args}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis
        temporibus nisi exercitationem ipsum ex sint iste qui reprehenderit eum?
      </p>
    </Bounded>
  ),
  play: async ({ canvas }) => {
    const paragraph = canvas.getByRole('paragraph');
    const parent = paragraph.parentElement;

    await expect(paragraph).toBeInTheDocument();
    await expect(parent).toBeInTheDocument();
    await expect(parent?.tagName).toBe('SECTION');
  },
};

export const MultipleElements: Story = {
  render: (args) => (
    <Bounded {...args} as="main" spacing="sm">
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis
        temporibus nisi exercitationem ipsum ex sint iste qui reprehenderit eum?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis
        temporibus nisi exercitationem ipsum ex sint iste qui reprehenderit eum?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis
        temporibus nisi exercitationem ipsum ex sint iste qui reprehenderit eum?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis
        temporibus nisi exercitationem ipsum ex sint iste qui reprehenderit eum?
      </p>
    </Bounded>
  ),
  play: async ({ canvas }) => {
    const paragraphs = canvas.getAllByRole('paragraph');
    const title = canvas.getByText(/title/i);
    const parent = title.parentElement;

    await expect(paragraphs).toHaveLength(4);
    await expect(title).toBeInTheDocument();
    await expect(parent?.tagName).toBe('MAIN');
  },
};
