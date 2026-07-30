'use client';

import {
  ActionRespone,
  SkillInputSchema,
  SkillOutputSchema,
  SkillSchema,
} from '@saisaynoomleng_dev/utils';
import React from 'react';
import { SkillForm } from './SkillForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

type CreateSkillFormProps = {
  action: (data: SkillInputSchema) => Promise<ActionRespone<SkillOutputSchema>>;
};

export const CreateSkillForm = ({
  action,
}: CreateSkillFormProps): React.JSX.Element => {
  const form = useForm<SkillInputSchema>({
    resolver: zodResolver(SkillSchema),
    defaultValues: {
      name: '',
      slug: '',
      level: 0,
    },
  });

  const onSubmit: SubmitHandler<SkillInputSchema> = async (data) => {
    const result = await action(data);

    if (!result.success) {
      toast.error(result.message);
      return form.setError(result.field as keyof SkillInputSchema, {
        message: result.message,
      });
    }

    return toast.success(result.message);
  };

  return <SkillForm form={form} onSubmit={onSubmit} />;
};
