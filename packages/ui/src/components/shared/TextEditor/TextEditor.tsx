'use client';

import React from 'react';
import { Bounded } from '../Bounded';
import { schemaDefinition } from './TextEditor.schema';

import {
  EditorProvider,
  PortableTextEditable,
  type PortableTextBlock,
  type RenderDecoratorFunction,
  type RenderStyleFunction,
  type RenderAnnotationFunction,
  type RenderBlockFunction,
  type RenderListItemFunction,
} from '@portabletext/editor';
import { EventListenerPlugin } from '@portabletext/editor/plugins';
import { TextEditorToolbar } from './TextEditorToolbar';

type TextEditorProps = {
  value?: PortableTextBlock[];
  onChange: (value: PortableTextBlock[]) => void;
};

export const TextEditor = ({
  value,
  onChange,
}: TextEditorProps): React.JSX.Element => {
  return (
    <Bounded padding="none" size="full" isCentered={false}>
      <EditorProvider
        initialConfig={{
          schemaDefinition,
          initialValue: value as PortableTextBlock[],
        }}
      >
        <EventListenerPlugin
          on={(event) => {
            if (event.type === 'mutation') {
              onChange(event.value as PortableTextBlock[]);
            }
          }}
        />

        <TextEditorToolbar />

        <PortableTextEditable
          className="border border-input h-100 p-2 indent-2 max-h-100 overflow-y-auto"
          renderStyle={renderStyle}
          renderDecorator={renderDecorator}
          renderAnnotation={renderAnnotation}
          renderBlock={renderBlock}
          renderListItem={renderListItem}
        />
      </EditorProvider>
    </Bounded>
  );
};

const renderStyle: RenderStyleFunction = ({ schemaType, children }) => {
  if (schemaType.name === 'h1') {
    return <h1 className="text-fs-500">{children}</h1>;
  }

  if (schemaType.name === 'h2') {
    return <h2 className="text-fs-500">{children}</h2>;
  }

  if (schemaType.name === 'h3') {
    return <h3 className="text-fs-500">{children}</h3>;
  }

  if (schemaType.name === 'h4') {
    return <h4 className="text-fs-500">{children}</h4>;
  }

  if (schemaType.name === 'blockquote') {
    return (
      <blockquote className="border-l-2 border-input">{children}</blockquote>
    );
  }

  return <p>{children}</p>;
};

const renderDecorator: RenderDecoratorFunction = ({ value, children }) => {
  if (value === 'strong') {
    return <span className="font-semibold">{children}</span>;
  }

  if (value === 'em') {
    return <span className="italic">{children}</span>;
  }

  if (value === 'underline') {
    return <span className="underline underline-offset-2">{children}</span>;
  }

  if (value === 'strikeThrough') {
    return <span className="line-through">{children}</span>;
  }

  return <span>{children}</span>;
};

const renderAnnotation: RenderAnnotationFunction = (props) => {
  if (props.schemaType.name === 'link') {
    return (
      <span className="text-brand-accent-500 underline underline-offset-2">
        {props.children}
      </span>
    );
  }

  return <span>{props.children}</span>;
};

const isImage = (
  props: PortableTextBlock,
): props is PortableTextBlock & {
  src: string;
  alt?: string;
} => {
  return 'src' in props;
};

const isCode = (
  props: PortableTextBlock,
): props is PortableTextBlock & { text: string; language?: string } => {
  return 'text' in props;
};

const renderBlock: RenderBlockFunction = (props) => {
  if (props.schemaType.name === 'image' && isImage(props.value)) {
    return (
      <img
        src={props.value.src}
        alt={props.value?.alt ?? ''}
        className="w-full h-full"
      />
    );
  }

  if (props.schemaType.name === 'code' && isCode(props.value)) {
    return (
      <pre className="p-5 bg-brand-white-400 overflow-auto">
        <code>{props.value.text}</code>
      </pre>
    );
  }

  return <div>{props.children}</div>;
};

const renderListItem: RenderListItemFunction = (props) => {
  if (props.schemaType.name === 'bullet') {
    return <li className="ml-5">{props.children}</li>;
  }

  if (props.schemaType.name === 'number') {
    return <li className="ml-5">{props.children}</li>;
  }

  return <>{props.children}</>;
};
