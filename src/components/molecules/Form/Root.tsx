'use client';

import { ComponentProps } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import FormProvider, { FormProviderProps } from '@/Providers/Form';
import { useFormContext } from '@/hooks/contexts';

type FormMoleculeOwnProps = {
  action?: SubmitHandler<FieldValues>;
  onSubmit?: SubmitHandler<FieldValues>;
};

type FormMoleculeProps = FormMoleculeOwnProps &
  Omit<ComponentProps<'form'>, keyof FormMoleculeOwnProps>;

const FormMolecule = ({ action, onSubmit, ...props }: FormMoleculeProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useFormContext();

  const onSend = () => {
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
  };

  return (
    <form
      data-loading={isSubmitting}
      noValidate
      {...onSend()}
      {...props}
    />
  );
};

type FormMoleculeWithProviderOwnProps = {};

type FormMoleculeWithProviderProps = FormMoleculeWithProviderOwnProps &
  Omit<
    Omit<FormProviderProps, 'children'> & FormMoleculeProps,
    keyof FormMoleculeWithProviderOwnProps
  >;

const FormMoleculeWithProvider = ({
  defaultValues,
  schema,
  shouldReset,
  ...props
}: FormMoleculeWithProviderProps) => {
  return (
    <FormProvider
      defaultValues={defaultValues}
      schema={schema}
      shouldReset={shouldReset}
    >
      <FormMolecule {...props} />
    </FormProvider>
  );
};

export default FormMoleculeWithProvider;
export type { FormMoleculeWithProviderProps };
