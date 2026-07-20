import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type ProjectCardProps = SlotElementProps<'li'>;

export const ProjectCard = ({ className, ...props }: ProjectCardProps) => {
  return (
    <SlotElement
      tag='li'
      className={cn(
        'relative w-full border bg-body',
        'sm:max-lg:translate-y-(--y1) sm:max-lg:even:translate-y-(--y2)',
        'lg:translate-y-(--y1) lg:nth-[3n+2]:translate-y-(--y2)',
        className
      )}
      {...props}
    />
  );
};
