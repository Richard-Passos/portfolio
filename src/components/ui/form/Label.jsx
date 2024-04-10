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
        'w-fit translate-x-1.5 translate-y-1/2 relative isolate px-2.5 lowercase first-letter:uppercase before:absolute before:inset-0 before:bottom-1/2 before:translate-y-px before:bg-main before:-z-10',
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
