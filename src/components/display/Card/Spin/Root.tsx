import { cn } from '@/utils/cn';

import { SpinCardHover } from './Hover';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SpinCardProps = SlotElementProps<'li'>;

export const SpinCard = ({ className, ...props }: SpinCardProps) => {
  return (
    <SpinCardHover>
      <SlotElement
        tag='li'
        className={cn(
          'group/card relative isolate -mt-px -mr-px aspect-square w-full max-w-64 border border-transparent',
          className
        )}
        {...props}
      />
    </SpinCardHover>
  );
};
