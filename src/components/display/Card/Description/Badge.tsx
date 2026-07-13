import { cn } from '@/utils/cn';
import { Badge, BadgeProps } from '@/components/display/Badge';

export type DescriptionCardBadgeProps = BadgeProps;

export const DescriptionCardBadge = ({ className, ...props }: DescriptionCardBadgeProps) => {
  return (
    <Badge
      color='muted'
      variant='subtle'
      className={cn('text-placeholder', className)}
      {...props}
    />
  );
};
