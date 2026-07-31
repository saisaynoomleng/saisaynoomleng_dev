import { fn } from 'storybook/test';

export const mockAction = fn(async () => {
  return {
    success: true,
    message: 'Submit success!',
  };
});

export const mockSkill = { level: 99, name: 'TypeScript', slug: 'typescript' };

export const mockAboutData = {
  name: 'saisaynoomleng_dev',
  slug: 'saisaynoomleng-dev',
  body: [
    {
      _key: '4d6ffdb3e1a6',
      _type: 'block',
      children: [
        {
          _key: '6a1311c0a62f',
          _type: 'span',
          marks: [],
          text: 'sai sai love haru',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  city: 'Cleveland',
  state: 'Ohio',
  gitHubUrl: 'https://www.github.com',
  linkedInUrl: 'https://www.linkedin.com',
  leetCodeUrl: 'https://www.leetcode.com',
  interests: ['grind leetcode'],
};
