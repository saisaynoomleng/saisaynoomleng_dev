'use client';

import { Field, FieldError, FieldLabel } from '#components/ui/field';
import { twMerge } from 'tailwind-merge';
import { Bounded } from '../Bounded';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, useState } from 'react';
import { Input } from '#components/ui/input';
import {
  Attachment,
  AttachmentContent,
  AttachmentMedia,
} from '#components/ui/attachment';
import {
  allowImageTypes,
  maximumImageSize,
  formatFileSize,
} from '@saisaynoomleng_dev/utils';
import { BsFileImageFill } from 'react-icons/bs';

type InputImageProps = {
  className?: string;
  onValidationError?: (message: string) => void;
  onChange: (file: File) => void;
  errorMessage?: string;
} & ComponentPropsWithoutRef<'input'>;

type imageValidationResponse =
  { success: true; file: File } | { success: false; message: string };

export const InputImage = ({
  className,
  onValidationError,
  onChange,
  errorMessage,
  ...props
}: InputImageProps) => {
  const [image, setImage] = useState<{ file: File; imageUrl: string }>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = validateImage(e.target.files?.[0] as File);

    if (!result.success) {
      return onValidationError?.(result.message);
    }

    setImage({
      file: result.file,
      imageUrl: URL.createObjectURL(result.file),
    });

    onChange?.(result.file);
  };

  return (
    <Bounded
      isCentered={false}
      padding="none"
      className={twMerge(clsx('', className))}
      size="full"
    >
      <Field>
        <FieldLabel htmlFor="imageAssetId">Upload an Image</FieldLabel>

        <div className="border border-input min-h-40 flex justify-center items-center p-4">
          {image?.file ? (
            <Attachment orientation="vertical">
              <AttachmentMedia>
                <img
                  src={image.imageUrl}
                  alt=""
                  className="w-full object-cover h-full"
                />
              </AttachmentMedia>
              <AttachmentContent>
                <p>Type: {image.file.type}</p>
                <p>Size: {formatFileSize(image.file.size)}</p>
              </AttachmentContent>
            </Attachment>
          ) : (
            <BsFileImageFill className="size-10" />
          )}
        </div>

        <Input
          type="file"
          accept="image/*"
          id="imageAssetId"
          onChange={handleImageUpload}
          {...props}
        />
        {errorMessage && <FieldError>{errorMessage}</FieldError>}
      </Field>
    </Bounded>
  );
};

const validateImage = (file: File): imageValidationResponse => {
  if (!file) {
    return {
      success: false,
      message: 'Upload an image',
    };
  }

  if (file.size > maximumImageSize(1)) {
    return {
      success: false,
      message: 'Image size cannot exceed 1MB',
    };
  }

  if (!allowImageTypes.includes(file.type)) {
    return {
      success: false,
      message: 'Only accept image file type',
    };
  }

  return {
    success: true,
    file,
  };
};
