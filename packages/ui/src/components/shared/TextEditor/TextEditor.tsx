'use client';

import React, { useState } from 'react';
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
import { TextEditorPreview } from './TextEditorPreview';

export const TextEditor = (): React.JSX.Element => {
  const [value, setValue] = useState<PortableTextBlock[]>();

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
              setValue(event.value);
            }
          }}
        />

        <TextEditorToolbar />

        <PortableTextEditable
          className="border border-input min-h-100 indent-2 py-2"
          renderStyle={renderStyle}
          renderDecorator={renderDecorator}
          renderAnnotation={renderAnnotation}
          renderBlock={renderBlock}
          renderListItem={renderListItem}
        />

        <TextEditorPreview value={value as PortableTextBlock[]} />
      </EditorProvider>
    </Bounded>
  );
};

const renderStyle: RenderStyleFunction = ({ schemaType, children }) => {
  if (schemaType.name === 'h1') {
    return <h1 className="text-fs-800">{children}</h1>;
  }

  if (schemaType.name === 'h2') {
    return <h2 className="text-fs-700">{children}</h2>;
  }

  if (schemaType.name === 'h3') {
    return <h3 className="text-fs-600">{children}</h3>;
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
): props is PortableTextBlock & { src: string } => {
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
      <div className="border border-input p-4">IMG: {props.value.src}</div>
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
