'use client';

import {
  ClipboardTrigger as UiClipboardTrigger,
  ClipboardTriggerProps as UiClipboardTriggerProps
} from '@ark-ui/react/clipboard';

export type ClipboardTriggerProps = UiClipboardTriggerProps;

export const ClipboardTrigger = (props: ClipboardTriggerProps) => {
  return (
    <UiClipboardTrigger
      asChild
      {...props}
    />
  );
};
