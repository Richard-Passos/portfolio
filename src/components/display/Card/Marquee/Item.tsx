import { cn } from '@/utils/cn';
import { Badge, BadgeProps } from '@/components/display/Badge';

export type MarqueeCardItemProps = BadgeProps;

export const MarqueeCardItem = ({ className, ...props }: MarqueeCardItemProps) => {
  return (
    <Badge
      className={cn('mx-0.5', className)}
      {...props}
    />
  );
};
