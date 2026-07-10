import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export type CareerCardHeaderProps = SlotAsChildProps<ComponentProps<'header'>>;

export const CareerCardHeader = ({ asChild, className, ...props }: CareerCardHeaderProps) => {
  const Comp = asChild ? Slot : 'header';

  return (
    <Comp
      className={cn('flex shrink items-center justify-between gap-4 pl-[7.5%]', className)}
      {...props}
    />
  );
};
