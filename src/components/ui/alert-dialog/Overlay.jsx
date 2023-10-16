'use client';

import { Overlay } from '@radix-ui/react-alert-dialog';

import { cn } from '@/utils';

const AlertDialogOverlay = ({ className, ...props }) => {
  return (
    <Overlay
      className={cn(
        'bg-main/80 fixed inset-0 z-50 backdrop-blur-sm data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0',
        className,
      )}
      {...props}
    />
  );
};

export default AlertDialogOverlay;
