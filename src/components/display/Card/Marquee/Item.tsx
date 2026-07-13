import { cn } from '@/utils/cn';
import { Badge, BadgeProps } from '@/components/display/Badge';

export type MarqueeCardItemProps = BadgeProps;

export const MarqueeCardItem = ({ className, ...props }: MarqueeCardItemProps) => {
  return (
    <Badge
      size='lg'
      className={cn('mx-1', className)}
      {...props}
    />
  );
};
