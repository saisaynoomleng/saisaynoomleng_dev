import { PortableTextBlock } from '@portabletext/editor';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import React from 'react';
import { Bounded } from '../Bounded';

export const TextEditorPreview = ({
  value,
}: {
  value: PortableTextBlock[];
}): React.JSX.Element => {
  return (
    <Bounded
      className="text-foreground"
      size="full"
      isCentered={false}
      padding="none"
    >
      <div className="prose text-foreground">
        <PortableText value={value} components={components} />
      </div>
    </Bounded>
  );
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-base">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-fs-800 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-fs-700 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-fs-600 text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-fs-500 text-foreground">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-input text-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => <span className="italic">{children}</span>,
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    strikeThrough: ({ children }) => (
      <span className="line-through">{children}</span>
    ),
    underline: ({ children }) => (
      <span className="underline underline-offset-2">{children}</span>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('https')
        ? '_blank'
        : undefined;

      return (
        <a href={value?.href} target={target}>
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc marker:text-brand-primary-400">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal marker:text-brand-primary-400">{children}</ol>
    ),
  },
  listItem: ({ children }) => <li>{children}</li>,
  types: {
    image: ({ value }) => (
      <div className="w-150 h-100 aspect-video overflow-hidden relative">
        <img
          src={value.src}
          alt={value.alt ?? ''}
          className="w-full object-cover"
        />
      </div>
    ),
  },
};
