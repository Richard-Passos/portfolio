'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { useFormField } from '@/hooks';

const FormControl = ({ customRegister, ...props }, ref) => {
  const { error, descriptionId, messageId, id, name } = useFormField(),
    { register } = useFormContext();

  return (
    <Slot
      aria-describedby={
        !error ? descriptionId : `${descriptionId} ${messageId}`
      }
      aria-invalid={!!error}
      id={id}
      ref={ref}
      {...(customRegister || register(name))}
      {...props}
    />
  );
};

export default forwardRef(FormControl);
