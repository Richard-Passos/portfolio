'use client';

import { ComponentProps, useCallback } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { useFormContext } from '@/hooks/contexts';
import { FormProvider, FormProviderProps } from '@/providers/Form';
import { MergeProps } from '@/types';

type FormBaseProps = MergeProps<
  {
    action?: SubmitHandler<FieldValues>;
    onSubmit?: SubmitHandler<FieldValues>;
  },
  ComponentProps<'form'>
>;

const FormBase = ({ action, onSubmit, ...props }: FormBaseProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useFormContext();

  const handleSend = useCallback(() => {
    if (action) {
      const onAction = handleSubmit(action);

      return {
        action: () => onAction()
      };
    }

    if (onSubmit)
      return {
        onSubmit: handleSubmit(onSubmit)
      };
  }, [action, handleSubmit, onSubmit]);

  return (
    <form
      noValidate
      data-loading={isSubmitting ? true : undefined}
      {...handleSend()}
      {...props}
    />
  );
};

type FormRootProps = MergeProps<FormProviderProps, FormBaseProps>;

const FormRoot = ({
  defaultValues,
  schema,
  shouldReset,
  ...props
}: FormRootProps) => {
  return (
    <FormProvider
      defaultValues={defaultValues}
      schema={schema}
      shouldReset={shouldReset}
    >
      <FormBase {...props} />
    </FormProvider>
  );
};

export { FormRoot };
export type { FormRootProps };
