import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { SlotElement } from '@/components/misc/Slot/Element';

export type ProjectCardGalleryProps = ComponentProps<'ul'>;

export const ProjectCardGallery = ({ className, ...props }: ProjectCardGalleryProps) => {
  return (
    <SlotElement
      tag='ul'
      className={cn('grid w-full gap-4 sm:grid-cols-2 md:pt-64', className)}
      {...props}
    />
  );
};
