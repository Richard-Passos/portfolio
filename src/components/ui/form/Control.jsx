'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

const FormControl = ({ className, customRegister, ...props }, ref) => {
  const { error, descriptionId, messageId, id, name } = useFormField(),
    { register } = useFormContext();

  return (
    <Slot
      aria-describedby={
        !error ? descriptionId : `${descriptionId} ${messageId}`
      }
      aria-invalid={!!error}
      className={cn(error && 'focus-visible:outline-danger', className)}
      id={id}
      ref={ref}
      {...(customRegister || register(name))}
      {...props}
    />
  );
};

export default forwardRef(FormControl);
