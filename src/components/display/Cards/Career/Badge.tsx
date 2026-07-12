import { Badge, BadgeProps } from '@/components/display/Badge';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type CareerCardBadgeProps = MergeProps<{ index: number }, BadgeProps, 'children'>;

export const CareerCardBadge = ({ index, className, ...props }: CareerCardBadgeProps) => {
  return (
    <Badge
      color='primary'
      variant='subtle'
      className={cn('mr-4 -translate-y-2', className)}
      {...props}
    >
      {`${index + 1}`.padStart(2, 'Ø')}/
    </Badge>
  );
};
