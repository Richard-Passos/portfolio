'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

import Label from '../label';

const FormLabel = ({ className, ...props }, ref) => {
  const { error, id } = useFormField();

  return (
    <Label
      className={cn(
        'w-fit translate-x-1.5 translate-y-1/2 bg-main px-2.5 transition-bg',
        error && 'text-danger',
        className,
      )}
      htmlFor={id}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormLabel);
