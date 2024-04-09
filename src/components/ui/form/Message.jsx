'use client';

import { forwardRef } from 'react';

import { useFormField } from '@/hooks';
import { cn } from '@/utils';

import { Text } from '../text';

const FormMessage = ({ className, children, ...props }, ref) => {
  const { messageId, error } = useFormField();

  const content = error?.message ?? children

  return content && (
    <Text
      className={cn('mt-2 text-xs font-medium text-danger', className)}
      id={messageId}
      ref={ref}
      {...props}
    >
      {content}
    </Text> 
  );
};

export default forwardRef(FormMessage);
