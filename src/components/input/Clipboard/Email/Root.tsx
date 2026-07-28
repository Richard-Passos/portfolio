'use client';

import { Clipboard, ClipboardProps } from '@/components/input/Clipboard';
import { Tooltip } from '@/components/feedback/Tooltip';
import { useState } from 'react';
import { cn } from '@/utils/cn';

export type EmailClipboardProps = ClipboardProps;

export const EmailClipboard = ({ className, ...props }: EmailClipboardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      open={open}
      onOpenChange={(ev) => {
        setOpen(ev.open);
      }}
      closeOnClick={false}
      positioning={{ placement: 'bottom' }}
    >
      <Clipboard
        className={cn('group/clipboard has-engaged:z-10', className)}
        {...props}
        onStatusChange={(ev) => {
          if (!open) {
            setOpen(ev.copied);
          }

          props.onStatusChange?.(ev);
        }}
      />
    </Tooltip>
  );
};
