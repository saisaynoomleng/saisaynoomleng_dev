import { sanityFetch } from '@/sanity/live';
import { ABOUT_QUERY } from '@/sanity/query';
import {
  Bounded,
  TerminalWindow,
  TextEditorPreview,
} from '@saisaynoomleng_dev/ui';
import React from 'react';

export const About = async (): Promise<React.JSX.Element> => {
  const { data: about } = await sanityFetch({ query: ABOUT_QUERY });

  if (!about) return <></>;

  const { city, state, body, interests } = about;

  return (
    <Bounded size="full" padding="none" isCentered={false}>
      <TerminalWindow title="about.txt" prompt="cat about.txt">
        <Bounded
          as="div"
          size="full"
          padding="none"
          className="flex flex-col gap-y-3"
        >
          {body && <TextEditorPreview value={body} />}

          <p>
            <span className="text-primary">Location: </span>
            <span>{city}</span>
            <span>, {state}.</span>
          </p>

          <p>
            <span className="text-primary">Status: </span>
            Available for opportunities
          </p>

          <p>
            <span className="text-primary">Interests: </span>
            <span>{interests?.join(',')}</span>
          </p>
        </Bounded>
      </TerminalWindow>
    </Bounded>
  );
};
