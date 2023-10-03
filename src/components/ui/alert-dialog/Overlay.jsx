'use client';

import { Overlay } from '@radix-ui/react-alert-dialog';

import { cn } from '@/utils';

const AlertDialogOverlay = ({ className, ...props }) => {
  return (
    <Overlay
      className={cn(
        'data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 fixed inset-0 z-50 bg-background/80 backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  );
};

export default AlertDialogOverlay;
