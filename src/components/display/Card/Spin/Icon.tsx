import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SpinCardIconProps = SlotElementProps<'div'>;

export const SpinCardIcon = ({ className, ...props }: SpinCardIconProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn('text-4xl', className)}
      {...props}
    />
  );
};
