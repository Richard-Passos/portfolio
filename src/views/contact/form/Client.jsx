'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form, FormProvider } from '@/components/ui/form';
import { capitalize } from '@/utils';

const ContactViewFormClient = ({ data = [], ...props }) => {
  const schema = z.object(
    data.reduce(
      (obj, field = {}) => ({
        ...obj,
        [field.name]: field.config?.reduce(
          (obj, { name, params = [] }) => obj[name]?.(...params),
          z,
        ),
      }),
      {},
    ),
  );

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: data.reduce(
      (obj, field = {}) => ({ ...obj, [field.name]: field.defaultValue }),
      {},
    ),
  });

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...form}>
      <Form
        onSubmit={contactViewFormClientOnSubmit}
        {...props}
      />
    </FormProvider>
  );
};

const contactViewFormClientOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default ContactViewFormClient;
