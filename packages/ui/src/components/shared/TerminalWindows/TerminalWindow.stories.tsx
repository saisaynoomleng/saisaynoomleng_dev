import type { Meta, StoryObj } from '@storybook/react-vite';
import { TerminalWindow } from './TerminalWindow';
import { expect } from 'storybook/test';

const meta: Meta<typeof TerminalWindow> = {
  title: 'Components/Portfolio/TerminalWindow',
  component: TerminalWindow,
  tags: ['audodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Terminal Window-like Section Wrapper',
      },
    },
  },

  args: {
    title: 'about.txt',
    prompt: 'cat about.txt',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <TerminalWindow {...args}>
      <div className="flex flex-col gap-y-2">
        <p>
          I'm Sai Say Noom Leng, a software engineer and Computer Science
          student passionate about building modern, scalable web applications.
        </p>
        <p>
          With a background in editorial photography, I bring a creative
          perspective into engineering — combining design thinking with
          technical problem-solving. I specialize in full-stack development with
          React, Next.js, TypeScript, Node.js, PostgreSQL, and cloud
          technologies.
        </p>
        <p>
          I enjoy building products, designing reliable systems, and
          continuously learning how technology works from the interface to the
          infrastructure behind it.
        </p>
      </div>
    </TerminalWindow>
  ),
  play: async ({ canvas }) => {
    const title = canvas.getByTestId('title');
    const prompt = canvas.getByTestId('prompt');

    await expect(title).toBeInTheDocument();
    await expect(prompt).toBeInTheDocument();
  },
};
