'use client';

import { forwardRef, useId } from 'react';

import { FormFieldContext } from '@/contexts';
import { cn } from '@/utils';

const FormField = ({ name, className, ...props }, ref) => {
  const id = useId();

  return (
    <FormFieldContext.Provider value={{ id, name }}>
      <section
        className={cn('flex flex-col gap-3', className)}
        ref={ref}
        {...props}
      />
    </FormFieldContext.Provider>
  );
};

export default forwardRef(FormField);
