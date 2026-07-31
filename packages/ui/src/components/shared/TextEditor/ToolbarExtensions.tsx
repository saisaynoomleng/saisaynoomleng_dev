import {
  ExtendAnnotationSchemaType,
  ExtendBlockObjectSchemaType,
  ExtendDecoratorSchemaType,
  ExtendListSchemaType,
  ExtendStyleSchemaType,
} from '@portabletext/toolbar';
import { bold, italic, underline } from '@portabletext/keyboard-shortcuts';

import { FaList, FaListOl, FaQuoteRight } from 'react-icons/fa';
import { BsFileImageFill } from 'react-icons/bs';
import { IoIosLink } from 'react-icons/io';
import { ImTextColor } from 'react-icons/im';

export const extendStyle: ExtendStyleSchemaType = (style) => {
  if (style.name === 'normal') {
    return {
      ...style,
      title: 'Normal Text',
      icon: () => (
        <span>
          <ImTextColor />
        </span>
      ),
    };
  }

  if (style.name === 'h1') {
    return {
      ...style,
      title: 'Heading 1',
      icon: () => <span>H1</span>,
    };
  }

  if (style.name === 'h2') {
    return {
      ...style,
      title: 'Heading 2',
      icon: () => <span>H2</span>,
    };
  }

  if (style.name === 'h3') {
    return {
      ...style,
      title: 'Heading 3',
      icon: () => <span>H3</span>,
    };
  }

  if (style.name === 'h4') {
    return {
      ...style,
      title: 'Heading 4',
      icon: () => <span>H4</span>,
    };
  }

  if (style.name === 'blockquote') {
    return {
      ...style,
      title: 'Block Quote',
      icon: () => (
        <span>
          <FaQuoteRight />
        </span>
      ),
    };
  }

  return style;
};

export const extendDecorator: ExtendDecoratorSchemaType = (decorator) => {
  if (decorator.name === 'strong') {
    return {
      ...decorator,
      icon: () => <span className="font-semibold">B</span>,
      shortcut: bold,
      title: 'Bold',
    };
  }

  if (decorator.name === 'em') {
    return {
      ...decorator,
      icon: () => <span className="italic">I</span>,
      shortcut: italic,
      title: 'Italic',
    };
  }

  if (decorator.name === 'underline') {
    return {
      ...decorator,
      icon: () => <span className="underline">U</span>,
      shortcut: underline,
      title: 'Underline',
    };
  }

  if (decorator.name === 'strikeThrough') {
    return {
      ...decorator,
      icon: () => <span className="line-through">S</span>,
      title: 'Line Through',
    };
  }
  return decorator;
};

export const extendAnnotation: ExtendAnnotationSchemaType = (annotation) => {
  if (annotation.name === 'link') {
    return {
      ...annotation,
      icon: () => (
        <span>
          <IoIosLink />
        </span>
      ),
      title: 'Hyperlink',
    };
  }

  return annotation;
};

export const extendBlockObject: ExtendBlockObjectSchemaType = (blockObject) => {
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
    return { ...blockObject, title: 'Code', icon: () => <span>{'</>'}</span> };
  }

  return blockObject;
};

export const extendList: ExtendListSchemaType = (list) => {
  if (list.name === 'bullet') {
    return {
      ...list,
      icon: () => (
        <span>
          <FaList />
        </span>
      ),
      title: 'Bullet List',
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
      title: 'Number List',
    };
  }
  return list;
};
