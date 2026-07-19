import { cn } from '@/utils/cn';

import { SpinCardHover } from './Hover';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SpinCardProps = SlotElementProps<'section'>;

export const SpinCard = ({ className, ...props }: SpinCardProps) => {
  return (
    <SpinCardHover>
      <SlotElement
        tag='section'
        className={cn(
          'group/card perspective-1000 relative aspect-square w-full max-w-40 transition-transform duration-500 ease-backOut transform-3d engaged:rotate-y-180',
          className
        )}
        {...props}
      />
    </SpinCardHover>
  );
};
