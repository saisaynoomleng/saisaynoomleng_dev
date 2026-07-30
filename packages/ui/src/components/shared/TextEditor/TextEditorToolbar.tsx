'use client';

import {
  useDecoratorButton,
  useStyleSelector,
  useToolbarSchema,
  useAnnotationButton,
  useBlockObjectButton,
  useListButton,
  type ExtendAnnotationSchemaType,
  type ExtendBlockObjectSchemaType,
  type ExtendDecoratorSchemaType,
  type ExtendListSchemaType,
  type ExtendStyleSchemaType,
  type ToolbarAnnotationSchemaType,
  type ToolbarBlockObjectSchemaType,
  type ToolbarDecoratorSchemaType,
  type ToolbarListSchemaType,
  type ToolbarStyleSchemaType,
} from '@portabletext/toolbar';
import {
  bold,
  italic,
  underline,
  strikeThrough,
} from '@portabletext/keyboard-shortcuts';
import { BsFileImageFill } from 'react-icons/bs';
import { IoIosLink } from 'react-icons/io';
import { FaList, FaListOl, FaQuoteRight } from 'react-icons/fa';

import React from 'react';
import { Button } from '#components/ui/button';
import clsx from 'clsx';
import { Separator } from '#components/ui/separator';

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
    </div>
  );
};

// Extensions
const extendDecorator: ExtendDecoratorSchemaType = (decorator) => {
  if (decorator.name === 'strong') {
    return {
      ...decorator,
      icon: () => <span className="font-semibold">B</span>,
      shortcut: bold,
      title: '',
    };
  }

  if (decorator.name === 'em') {
    return {
      ...decorator,
      icon: () => <span className="italic">I</span>,
      shortcut: italic,
      title: '',
    };
  }

  if (decorator.name === 'underline') {
    return {
      ...decorator,
      icon: () => <span className="underline">U</span>,
      shortcut: underline,
      title: '',
    };
  }

  if (decorator.name === 'strikeThrough') {
    return {
      ...decorator,
      icon: () => <span className="line-through">S</span>,
    };
  }

  return decorator;
};

const extendStyle: ExtendStyleSchemaType = (style) => {
  if (style.name === 'normal') {
    return {
      ...style,
      title: 'normal',
    };
  }

  if (style.name === 'h1') {
    return {
      ...style,
      title: 'H1',
    };
  }

  if (style.name === 'h2') {
    return {
      ...style,
      title: 'H2',
    };
  }

  if (style.name === 'h3') {
    return {
      ...style,
      title: 'H3',
    };
  }

  if (style.name === 'h4') {
    return {
      ...style,
      title: 'H4',
    };
  }

  if (style.name === 'blockquote') {
    return {
      ...style,
      icon: () => (
        <span>
          <FaQuoteRight />
        </span>
      ),
    };
  }

  return style;
};

const extendBlockObject: ExtendBlockObjectSchemaType = (blockObject) => {
  if (blockObject.name === 'image') {
    return {
      ...blockObject,
      title: 'Image',
      icon: () => (
        <span>
          <BsFileImageFill />
        </span>
      ),
    };
  }

  if (blockObject.name === 'code') {
    return {
      ...blockObject,
      title: 'code',
      icon: () => <span>{'</>'}</span>,
    };
  }

  return blockObject;
};

const extendAnnotation: ExtendAnnotationSchemaType = (annotation) => {
  if (annotation.name === 'link') {
    return {
      ...annotation,
      icon: () => (
        <span>
          <IoIosLink />
        </span>
      ),
      title: '',
    };
  }

  return annotation;
};

const extendList: ExtendListSchemaType = (list) => {
  if (list.name === 'bullet') {
    return {
      ...list,
      icon: () => (
        <span>
          <FaList />
        </span>
      ),
    };
  }

  if (list.name === 'number') {
    return {
      ...list,
      icon: () => (
        <span>
          <FaListOl />
        </span>
      ),
    };
  }

  return list;
};

// Buttons
const StyleButton = ({
  schemaType,
}: {
  schemaType: ToolbarStyleSchemaType;
}) => {
  const styleSelector = useStyleSelector({ schemaTypes: [schemaType] });

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        styleSelector.send({ type: 'toggle', style: schemaType.name })
      }
      className={
        styleSelector.snapshot.context.activeStyle === schemaType.name
          ? 'bg-brand-primary-400 text-brand-black'
          : ''
      }
    >
      {schemaType.icon && <schemaType.icon />}
      {schemaType.title}
    </Button>
  );
};

const DecoratorButton = (props: { schemaType: ToolbarDecoratorSchemaType }) => {
  const decoratorButton = useDecoratorButton(props);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => decoratorButton.send({ type: 'toggle' })}
      className={clsx(
        'text-white',
        decoratorButton.snapshot.matches({ enabled: 'active' })
          ? 'bg-brand-primary-400 text-brand-black'
          : '',
      )}
    >
      {props.schemaType.icon && <props.schemaType.icon />}
      {props.schemaType.title}
    </Button>
  );
};

const BlockObjectButton = (props: {
  schemaType: ToolbarBlockObjectSchemaType;
}) => {
  const button = useBlockObjectButton(props);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => button.send({ type: 'open dialog' })}
      disabled={!button.snapshot.matches('enabled')}
      className={
        button.snapshot.matches({ enabled: 'showing dialog' })
          ? 'bg-brand-primary-400 text-brand-black'
          : ''
      }
    >
      {props.schemaType.icon && <props.schemaType.icon />}
      {props.schemaType.title}
    </Button>
  );
};

const AnnotationButton = (props: {
  schemaType: ToolbarAnnotationSchemaType;
}) => {
  const button = useAnnotationButton(props);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => button.send({ type: 'open dialog' })}
    >
      {props.schemaType.title}
      {props.schemaType.icon && <props.schemaType.icon />}
    </Button>
  );
};

const ListButton = (props: { schemaType: ToolbarListSchemaType }) => {
  const button = useListButton(props);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => button.send({ type: 'toggle' })}
      className={
        button.snapshot.matches({ enabled: 'active' })
          ? 'bg-brand-primary-400 text-brand-black'
          : ''
      }
    >
      {props.schemaType.title}
      {props.schemaType.icon && <props.schemaType.icon />}
    </Button>
  );
};
