import { cn } from '@/utils/cn';
import { Marquee, MarqueeProps } from '@/components/display/Marquee';

export type MarqueeCardListProps = MarqueeProps;

export const MarqueeCardList = ({ className, ...props }: MarqueeCardListProps) => {
  return (
    <Marquee
      className={cn('-mx-5', className)}
      {...props}
    />
  );
};
