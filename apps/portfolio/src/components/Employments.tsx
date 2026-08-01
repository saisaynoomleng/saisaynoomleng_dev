import { sanityFetch } from '@/sanity/live';
import { EMPLOYMENTS_QUERY } from '@/sanity/query';
import {
  Bounded,
  TerminalWindow,
  TextEditorPreview,
} from '@saisaynoomleng_dev/ui';
import { formatYear } from '@saisaynoomleng_dev/utils';
import React from 'react';

export const Employments = async ({
  id,
}: {
  id: string;
}): Promise<React.JSX.Element> => {
  const { data: employments } = await sanityFetch({ query: EMPLOYMENTS_QUERY });

  if (!employments) return <></>;

  console.log(employments);

  return (
    <Bounded size="full" isCentered={false} padding="none" id={id}>
      <TerminalWindow title="history" prompt="history | grep experience">
        {employments.map((e) => (
          <div key={e._id}>
            <div className="flex gap-x-4">
              <p className="text-primary font-semibold">
                [{e.startedDate && <span>{formatYear(e.startedDate)}</span>}-
                <span>
                  {e.endedDate
                    ? `${formatYear(e.endedDate as string)}`
                    : 'Present'}
                </span>
                ]
              </p>

              <p className="text-brand-accent-400">{e.employerName}</p>

              <p>:: {e.position}</p>
            </div>

            {e.body && (
              <div className="border-l ml-2">
                <TextEditorPreview value={e.body} />
              </div>
            )}
          </div>
        ))}
      </TerminalWindow>
    </Bounded>
  );
};
