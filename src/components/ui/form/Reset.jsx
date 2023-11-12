'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

const FormReset = ({ values, asChild, ...props }, ref) => {
  const { reset } = useFormContext();

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      onClick={() => reset(values)}
      ref={ref}
      type='reset'
      {...props}
    />
  );
};

export default forwardRef(FormReset);
