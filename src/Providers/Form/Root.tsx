'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode, useEffect } from 'react';
import { FormProvider as HookFormProvider, useForm } from 'react-hook-form';

type FormProviderOwnProps = {
  defaultValues: any;
  schema: any;
  shouldReset?: boolean;
  children: ReactNode;
};

type FormProviderProps = FormProviderOwnProps;

const FormProvider = ({
  defaultValues,
  schema,
  shouldReset = true,
  ...props
}: FormProviderProps) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues
  });

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful && shouldReset) reset();
  }, [isSubmitSuccessful, shouldReset, reset]);

  return (
    <HookFormProvider
      {...form}
      {...props}
    />
  );
};

export default FormProvider;
export type { FormProviderProps };
