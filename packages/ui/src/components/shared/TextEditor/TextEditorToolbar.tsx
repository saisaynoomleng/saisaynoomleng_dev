'use client';

import { useToolbarSchema } from '@portabletext/toolbar';

import React from 'react';
import { Separator } from '#components/ui/separator';

import {
  extendAnnotation,
  extendBlockObject,
  extendDecorator,
  extendList,
  extendStyle,
} from './ToolbarExtensions';
import {
  AnnotationButton,
  BlockObjectButton,
  DecoratorButton,
  HistoryButtons,
  ListButton,
  StyleButton,
} from './ToobarButtons';

export const TextEditorToolbar = (): React.JSX.Element => {
  const toolbar = useToolbarSchema({
    extendDecorator,
    extendStyle,
    extendBlockObject,
    extendAnnotation,
    extendList,
  });

  return (
    <div className="border p-2 flex gap-x-3">
      <div className="flex gap-x-1">
        {toolbar.styles.map((style) => (
          <StyleButton key={style.name} schemaType={style} />
        ))}
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-x-1">
        {toolbar.decorators?.map((decorator) => (
          <DecoratorButton key={decorator.name} schemaType={decorator} />
        ))}
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-x-1">
        {toolbar.blockObjects.map((obj) => (
          <BlockObjectButton key={obj.name} schemaType={obj} />
        ))}
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-x-1">
        {toolbar.annotations.map((annotation) => (
          <AnnotationButton key={annotation.name} schemaType={annotation} />
        ))}
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-x-1">
        {toolbar.lists.map((list) => (
          <ListButton key={list.name} schemaType={list} />
        ))}
      </div>

      <Separator orientation="vertical" />

      <div className="flex gap-x-1">
        <HistoryButtons />
      </div>
    </div>
  );
};
