import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';
import { SlotElement } from '@/components/misc/Slot/Element';

export type ProjectCardProps = ComponentProps<'li'>;

export const ProjectCard = ({ className, ...props }: ProjectCardProps) => {
  return (
    <SlotElement
      tag='li'
      className={cn('relative w-full border bg-body md:even:-translate-y-64', className)}
      {...props}
    />
  );
};
