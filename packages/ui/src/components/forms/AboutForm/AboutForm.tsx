'use client';

import { AboutInputSchema, sanitySlugifier } from '@saisaynoomleng_dev/utils';
import React from 'react';
import { Controller, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Bounded, TextEditor, TextEditorPreview } from '../../shared';
import {
  Field,
  FieldError,
  FieldLabel,
  FieldTitle,
} from '#components/ui/field';
import { Input } from '#components/ui/input';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Button } from '#components/ui/button';

type AboutFormProps = {
  form: UseFormReturn<AboutInputSchema>;
  onSubmit: SubmitHandler<AboutInputSchema>;
  title: string;
};

export const AboutForm = ({
  form,
  onSubmit,
  title,
}: AboutFormProps): React.JSX.Element => {
  const { register } = form;
  const { errors } = form.formState;

  const interests = form.watch('interests');

  const addInterest = () => {
    form.setValue('interests', [...interests, '']);
  };

  const removeInterest = (index: number) => {
    form.setValue(
      'interests',
      interests.filter((_, i) => i != index),
    );
  };

  const generateSlug = () => {
    const name = form.getValues('name');

    if (!name) {
      return form.setError('slug', {
        message: 'Input name first!',
      });
    }

    const slug = sanitySlugifier(name);

    if (!slug) {
      return form.setError('slug', {
        message: 'Invalid slug!',
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
      isCentered={false}
      size="full"
      className={twMerge(clsx('flex flex-col gap-y-4'))}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldTitle>{title}</FieldTitle>

      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input type="text" id="name" {...register('name')} />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="slug">Slug</FieldLabel>
        <div className="flex gap-x-2">
          <Input type="text" id="slug" {...register('slug')} />
          <Button variant="outline" type="button" onClick={generateSlug}>
            Generate
          </Button>
        </div>
        {errors.slug && <FieldError>{errors.slug.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <Input type="text" id="city" {...register('city')} />
        {errors.city && <FieldError>{errors.city.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="state">State</FieldLabel>
        <Input type="text" id="state" {...register('state')} />
        {errors.state && <FieldError>{errors.state.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="gitHubUrl">GitHub URL</FieldLabel>
        <Input type="url" id="gitHubUrl" {...register('gitHubUrl')} />
        {errors.gitHubUrl && (
          <FieldError>{errors.gitHubUrl.message}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="linkedInUrl">LinkedIn URL</FieldLabel>
        <Input type="url" id="linkedInUrl" {...register('linkedInUrl')} />
        {errors.linkedInUrl && (
          <FieldError>{errors.linkedInUrl.message}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="leetCodeUrl">GitHub URL</FieldLabel>
        <Input type="url" id="leetCodeUrl" {...register('leetCodeUrl')} />
        {errors.leetCodeUrl && (
          <FieldError>{errors.leetCodeUrl.message}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel>Interests</FieldLabel>

        <div className="flex flex-col gap-y-2 border p-4">
          {interests.map((interest, i) => (
            <div key={i} className="flex gap-x-2">
              <Input {...register(`interests.${i}`)} defaultValue={interest} />

              <Button
                type="button"
                variant="outline"
                onClick={() => removeInterest(i)}
              >
                Remove this interest
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addInterest}
            className="self-end"
          >
            Add Interest
          </Button>
        </div>
      </Field>

      <Field>
        <FieldLabel htmlFor="">Description</FieldLabel>

        <div>
          <Controller
            control={form.control}
            name="body"
            render={({ field }) => (
              <TextEditor onChange={field.onChange} value={field.value} />
            )}
          />
          {errors.body && <FieldError>{errors.body.message}</FieldError>}
        </div>

        <TextEditorPreview value={form.watch('body')} />
      </Field>

      <Button className="self-start">Publish</Button>
    </Bounded>
  );
};
