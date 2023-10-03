'use client';

import { Portal } from '@radix-ui/react-alert-dialog';

import { cn } from '@/utils';

const AlertDialogPortal = ({ className, ...props }) => {
  return (
    <Portal
      className={cn(className)}
      {...props}
    />
  );
};

export default AlertDialogPortal;
