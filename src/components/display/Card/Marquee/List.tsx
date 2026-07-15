import { cn } from '@/utils/cn';
import { Marquee, MarqueeProps } from '@/components/display/Marquee';

export type MarqueeCardListProps = MarqueeProps;

export const MarqueeCardList = ({ className, ...props }: MarqueeCardListProps) => {
  return (
    <Marquee
      className={cn('mt-2 mb-auto w-[calc(100%+(--spacing(10)))]!', className)}
      {...props}
    />
  );
};
