'use client';

import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/utils';

const Form = ({ className, onSubmit, ...props }, ref) => {
  const { handleSubmit } = useFormContext();

  return (
    <form
      className={cn('grid gap-xs', className)}
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Form);
