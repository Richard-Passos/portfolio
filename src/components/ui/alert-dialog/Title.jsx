'use client';

import { Title } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertDialogTitle = ({ className, ...props }, ref) => (
  <Title
    className={cn('text-lg font-semibold', className)}
    ref={ref}
    {...props}
  />
);

export default forwardRef(AlertDialogTitle);
