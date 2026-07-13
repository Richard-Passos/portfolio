import { Badge, BadgeProps } from '@/components/display/Badge';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type ProjectCardBadgeProps = MergeProps<{ index: number }, BadgeProps, 'children'>;

export const ProjectCardBadge = ({ index, className, ...props }: ProjectCardBadgeProps) => {
  return (
    <div className='absolute top-0 right-0 z-10 border-b border-l bg-body p-2'>
      <Badge
        color='primary'
        variant='subtle'
        {...props}
      >
        {`${index + 1}`.padStart(2, 'Ø')}/
      </Badge>
    </div>
  );
};
