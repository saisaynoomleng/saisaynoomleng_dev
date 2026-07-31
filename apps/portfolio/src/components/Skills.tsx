import { sanityFetch } from '@/sanity/live';
import { SKILLS_QUERY } from '@/sanity/query';
import { Bounded, TerminalWindow } from '@saisaynoomleng_dev/ui';
import React from 'react';

export const Skills = async ({
  id,
}: {
  id: string;
}): Promise<React.JSX.Element> => {
  const { data: skills } = await sanityFetch({ query: SKILLS_QUERY });

  if (!skills) return <></>;

  const barCounts = 40;
  const filledBars = (level: number) => Math.floor((level / 100) * barCounts);

  return (
    <Bounded size="full" isCentered padding="none" id={id}>
      <TerminalWindow title="skills.sh" prompt="./skills.sh --lsah">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="grid grid-cols-[150px_1fr_auto] justify-between gap-y-3"
          >
            <p>{skill.name}</p>
            <div>
              [
              {Array.from({ length: barCounts }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < filledBars(skill.level as number)
                      ? 'text-primary'
                      : 'text-brand-white-500'
                  }
                >
                  {i < filledBars(skill.level as number) ? '#' : '-'}
                </span>
              ))}
              ]
            </div>
            <p>{skill.level}%</p>
          </div>
        ))}
      </TerminalWindow>
    </Bounded>
  );
};
