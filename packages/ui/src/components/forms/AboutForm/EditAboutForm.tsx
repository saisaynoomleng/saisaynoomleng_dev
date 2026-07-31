'use client';

import {
  AboutInputSchema,
  AboutOutputSchema,
  AboutSchema,
  ActionRespone,
} from '@saisaynoomleng_dev/utils';
import React from 'react';
import { AboutForm } from './AboutForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

type EditAboutFormProps = {
  action: (data: AboutInputSchema) => Promise<ActionRespone<AboutOutputSchema>>;
  about: AboutOutputSchema;
};

export const EditAboutForm = ({
  action,
  about,
}: EditAboutFormProps): React.JSX.Element => {
  const form = useForm<AboutInputSchema>({
    resolver: zodResolver(AboutSchema),
    defaultValues: {
      name: about.name,
      slug: about.slug,
      body: [...about.body],
      city: about.city,
      state: about.state,
      gitHubUrl: about.gitHubUrl,
      linkedInUrl: about.linkedInUrl,
      leetCodeUrl: about.leetCodeUrl,

      interests: [...about.interests],
    },
  });

  const onSubmit: SubmitHandler<AboutInputSchema> = async (data) => {
    const result = await action(data);

    if (!result.success) {
      toast.error(result.message);
      return form.setError(result.field as keyof AboutInputSchema, {
        message: result.message,
      });
    }

    return toast.success(result.message);
  };

  return <AboutForm form={form} onSubmit={onSubmit} title="Edit About" />;
};
