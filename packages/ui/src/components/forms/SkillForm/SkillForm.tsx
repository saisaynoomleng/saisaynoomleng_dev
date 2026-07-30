'use client';

import React from 'react';
import { Bounded } from '../../shared';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { sanitySlugifier, SkillInputSchema } from '@saisaynoomleng_dev/utils';
import { Field, FieldError, FieldLabel } from '#components/ui/field';
import { Input } from '#components/ui/input';
import { Button } from '#components/ui/button';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type SkillFormProps = {
  form: UseFormReturn<SkillInputSchema>;
  onSubmit: SubmitHandler<SkillInputSchema>;
};

export const SkillForm = ({
  form,
  onSubmit,
}: SkillFormProps): React.JSX.Element => {
  const { register, setError } = form;
  const { errors } = form.formState;

  const generateSlug = () => {
    const name = form.getValues('name');

    if (!name) {
      return setError('slug', {
        message: 'Input name first!',
      });
    }

    const slug = sanitySlugifier(name);

    if (!slug) {
      return setError('slug', {
        message: 'Invalid Slug!',
      });
    }

    form.setValue('slug', slug, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <Bounded
      as="form"
      size="full"
      isCentered={false}
      onSubmit={form.handleSubmit(onSubmit)}
      className={twMerge(clsx('flex flex-col gap-y-4'))}
    >
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input type="text" id="name" {...register('name')} />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="slug">Slug</FieldLabel>
        <div className="flex gap-x-3">
          <Input type="text" id="slug" {...register('slug')} />
          <Button variant="outline" type="button" onClick={generateSlug}>
            Generate
          </Button>
        </div>
        {errors.slug && <FieldError>{errors.slug.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="level">Level</FieldLabel>
        <Input
          type="number"
          id="level"
          {...register('level', { valueAsNumber: true })}
        />
        {errors.level && <FieldError>{errors.level.message}</FieldError>}
      </Field>

      <Button variant="submit">Publish</Button>
    </Bounded>
  );
};
