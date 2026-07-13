import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type ProjectCardHeaderProps = SlotElementProps<'header'>;

export const ProjectCardHeader = ({ className, ...props }: ProjectCardHeaderProps) => {
  return (
    <SlotElement
      tag='header'
      className={cn('flex items-center border-t pl-6', className)}
      {...props}
    />
  );
};
