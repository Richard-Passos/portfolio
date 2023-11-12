'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

import Label from '../label';

const FormLabel = ({ className, ...props }, ref) => {
  const { error, id } = useFormField();

  return (
    <Label
      className={cn(error && 'text-danger', className)}
      htmlFor={id}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormLabel);
