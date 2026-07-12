import { SlotElement } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export type CareerCardHeaderProps = ComponentProps<'header'>;

export const CareerCardHeader = ({ className, ...props }: CareerCardHeaderProps) => {
  return (
    <SlotElement
      tag='header'
      className={cn('flex items-center pl-[7.5%]', className)}
      {...props}
    />
  );
};
