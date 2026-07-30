import { fn } from 'storybook/test';

export const mockAction = fn(async () => {
  return {
    success: true,
    message: 'Submit success!',
  };
});

export const mockSkill = { level: 99, name: 'TypeScript', slug: 'typescript' };
