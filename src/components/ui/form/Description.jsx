'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

import { Text } from '../text';

const FormDescription = ({ className, ...props }, ref) => {
  const { descriptionId } = useFormField();

  return (
    <Text
      className={cn('sr-only', className)}
      id={descriptionId}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormDescription);
