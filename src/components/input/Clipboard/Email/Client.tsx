'use client';

import { Clipboard, ClipboardProps } from '@/components/input/Clipboard';
import { Tooltip } from '@/components/feedback/Tooltip';
import { useState } from 'react';

export type EmailClipboardClientProps = ClipboardProps;

export const EmailClipboardClient = ({ children, ...props }: EmailClipboardClientProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Clipboard
      {...props}
      onStatusChange={(ev) => {
        if (!open) {
          setOpen(ev.copied);
        }

        props.onStatusChange?.(ev);
      }}
    >
      <Tooltip
        open={open}
        onOpenChange={(ev) => {
          setOpen(ev.open);
        }}
        closeOnClick={false}
        positioning={{ placement: 'bottom' }}
      >
        {children}
      </Tooltip>
    </Clipboard>
  );
};
