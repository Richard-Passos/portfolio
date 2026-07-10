'use client';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { setRefs } from '@/utils/setRefs';
import { Slot, SlotAsChildProps } from '@/components/misc/Slot';

import { useSetTheme } from './useSetTheme';
import { RefObject, useRef, ComponentProps } from 'react';

type SectionProps = SlotAsChildProps<MergeProps<
    {
      theme: Parameters<typeof useSetTheme>['1'];
      forceTheme?: Parameters<typeof useSetTheme>['2']; 
    },
    ComponentProps<'section'>
  >>;

const Section = ({
  asChild,
  theme,
  forceTheme,
  className,
  children, 
  ref,
  ...props
}: SectionProps) => {
  const innerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useSetTheme(innerRef, theme, forceTheme);

  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      data-theme={theme} 
      ref={setRefs(ref, innerRef)}
      className={cn(
        'bg-body text-body-emphasis 3xl:min-h-bounds relative flex min-h-svh w-full flex-col items-center justify-center py-[clamp(--spacing(24),4.5vw+2rem,--spacing(32))]',
        className 
      )} 
      {...props}
    >
      {children}
    </Comp>
  ); 
};

export { Section };
export type { SectionProps };
