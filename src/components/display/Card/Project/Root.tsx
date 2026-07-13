import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type ProjectCardProps = SlotElementProps<'li'>;

export const ProjectCard = ({ className, ...props }: ProjectCardProps) => {
  return (
    <SlotElement
      tag='li'
      className={cn('relative w-full border bg-body md:even:-translate-y-64', className)}
      {...props}
    />
  );
};
