'use client';

import { Button } from '#components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '#components/ui/tooltip';
import {
  ToolbarStyleSchemaType,
  useStyleSelector,
  useDecoratorButton,
  useAnnotationButton,
  useBlockObjectButton,
  useListButton,
  ToolbarDecoratorSchemaType,
  ToolbarAnnotationSchemaType,
  ToolbarListSchemaType,
  useHistoryButtons,
  ToolbarBlockObjectSchemaType,
} from '@portabletext/toolbar';
import clsx from 'clsx';
import React, { useState } from 'react';
import { LuRedo2, LuUndo2 } from 'react-icons/lu';
import { InputImage } from '../InputImage';

export const StyleButton = ({
  schemaType,
}: {
  schemaType: ToolbarStyleSchemaType;
}) => {
  const styleSelector = useStyleSelector({ schemaTypes: [schemaType] });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            styleSelector.send({ type: 'toggle', style: schemaType.name })
          }
          className={
            styleSelector.snapshot.context.activeStyle === schemaType.name
              ? 'bg-brand-primary-400 text-brand-black'
              : undefined
          }
        >
          {schemaType.icon && <schemaType.icon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{schemaType.title}</TooltipContent>
    </Tooltip>
  );
};

export const DecoratorButton = ({
  schemaType,
}: {
  schemaType: ToolbarDecoratorSchemaType;
}) => {
  const button = useDecoratorButton({ schemaType });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          onClick={() => button.send({ type: 'toggle' })}
          className={clsx(
            button.snapshot.matches({ enabled: 'active' }) &&
              'bg-brand-primary-400 text-brand-black',
          )}
        >
          {schemaType.icon && <schemaType.icon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{schemaType.title}</TooltipContent>
    </Tooltip>
  );
};

export const AnnotationButton = ({
  schemaType,
}: {
  schemaType: ToolbarAnnotationSchemaType;
}) => {
  const button = useAnnotationButton({ schemaType });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            button.send({
              type: 'open dialog',
            })
          }
          className={
            button.snapshot.matches({ enabled: 'active' })
              ? 'underline'
              : undefined
          }
        >
          {schemaType.icon && <schemaType.icon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{schemaType.title}</TooltipContent>
    </Tooltip>
  );
};

export const ListButton = ({
  schemaType,
}: {
  schemaType: ToolbarListSchemaType;
}) => {
  const button = useListButton({ schemaType });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          onClick={() => button.send({ type: 'toggle' })}
          className={clsx(
            button.snapshot.matches({ enabled: 'active' }) &&
              'bg-brand-primary-400 text-brand-black',
          )}
        >
          {schemaType.icon && <schemaType.icon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{schemaType.title}</TooltipContent>
    </Tooltip>
  );
};

export const HistoryButtons = () => {
  const buttons = useHistoryButtons();

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="outline"
            onClick={() => buttons.send({ type: 'history.undo' })}
            disabled={buttons.snapshot.matches('disabled')}
          >
            <LuUndo2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Undo</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="outline"
            onClick={() => buttons.send({ type: 'history.redo' })}
            disabled={buttons.snapshot.matches('disabled')}
          >
            <LuRedo2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Redo</TooltipContent>
      </Tooltip>
    </>
  );
};

export const BlockObjectButton = (props: {
  schemaType: ToolbarBlockObjectSchemaType;
}) => {
  const button = useBlockObjectButton(props);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleClick = () => {
    button.send({ type: 'open dialog' });
  };

  const handleImageUpload = (file: File) => {
    const url = URL.createObjectURL(file);

    setImageUrl(url);
  };

  return (
    <Tooltip>
      <Dialog>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button type="button" variant="outline" onClick={handleClick}>
              {props.schemaType.icon && <props.schemaType.icon />}
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>{props.schemaType.title}</TooltipContent>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert {props.schemaType.name}</DialogTitle>
          </DialogHeader>

          {props.schemaType.name === 'image' && (
            <InputImage onChange={(file) => handleImageUpload(file as File)} />
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                onClick={() => {
                  if (!imageUrl) return;

                  button.send({
                    type: 'insert',
                    value: {
                      _type: 'image',
                      alt: '',
                      asset: {
                        _ref: imageUrl,
                        _type: 'reference',
                      },
                    },
                    placement: 'auto',
                  });
                }}
              >
                Insert
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Tooltip>
  );
};
