import React from 'react';
import { Bounded } from '../Bounded';

type TerminalWindowProps = {
  title: string;
  prompt: string;
  children: React.ReactNode;
};

export const TerminalWindow = ({
  title,
  prompt,
  children,
}: TerminalWindowProps): React.JSX.Element => {
  return (
    <Bounded size="full">
      <div className="border border-primary/40">
        <div className="flex items-center px-4 py-2 ">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-brand-error-500/80" />
            <div className="w-3 h-3 rounded-full bg-brand-warning-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <p className="mx-auto text-xs font-mono" data-testid="title">
            {title}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 border-primary/40 border-l border-r border-b p-4">
        <p>
          <span className="text-primary">saisaynoomleng_dev</span>
          <span>:</span>
          <span className="text-brand-accent-500">~</span>
          <span>$</span>
          <span className="ml-2 inline-block" data-testid="prompt">
            {prompt}
          </span>
        </p>

        <div>{children}</div>
      </div>
    </Bounded>
  );
};
