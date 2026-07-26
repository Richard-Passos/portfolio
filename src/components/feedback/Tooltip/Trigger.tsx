'use client';

import {
  TooltipTrigger as UiTooltipTrigger,
  TooltipTriggerProps as UiTooltipTriggerProps
} from '@ark-ui/react/tooltip';

export type TooltipTriggerProps = UiTooltipTriggerProps;

export const TooltipTrigger = (props: TooltipTriggerProps) => {
  return (
    <UiTooltipTrigger
      asChild
      {...props}
    />
  );
};
