'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form, FormProvider } from '@/components/ui/form';
import { capitalize } from '@/utils';

const contactFormClientSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Email adress looks a bit weird.'),
  subject: z.string().optional(),
  message: z.string().min(2, 'Message must be at least 2 characters.'),
});

const ContactFormClient = (props) => {
  const form = useForm({
    resolver: zodResolver(contactFormClientSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...form}>
      <Form
        onSubmit={contactFormClientOnSubmit}
        {...props}
      />
    </FormProvider>
  );
};

const contactFormClientOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default ContactFormClient;
