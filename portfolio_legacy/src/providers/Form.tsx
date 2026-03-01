'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode, useEffect } from 'react';
import { FormProvider as HookFormProvider, useForm } from 'react-hook-form';

type FormProviderProps = {
  defaultValues: any;
  schema: any;
  shouldReset?: boolean;
  children: ReactNode;
};

const FormProvider = ({
  defaultValues,
  schema,
  shouldReset = true,
  ...props
}: FormProviderProps) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues
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

export { FormProvider };
export type { FormProviderProps };
