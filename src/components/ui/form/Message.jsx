'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

import { Text } from '../text';

const FormMessage = ({ className, children, ...props }, ref) => {
  const { messageId, error } = useFormField();

  return (
    <Text
      className={cn('text-sm font-medium text-danger', className)}
      id={messageId}
      ref={ref}
      {...props}
    >
      {error?.message ?? children}
    </Text>
  );
};

export default forwardRef(FormMessage);
