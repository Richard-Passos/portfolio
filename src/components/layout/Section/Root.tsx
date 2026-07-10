'use client';

import { ComponentProps, RefObject, useRef } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { setRefs } from '@/utils/setRefs';

import { useSetTheme } from './useSetTheme';

type SectionProps = SlotAsChildProps<
  MergeProps<
    {
      theme: Parameters<typeof useSetTheme>['1'];
      forceTheme?: Parameters<typeof useSetTheme>['2'];
    },
    ComponentProps<'section'>
  >
>;

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
        'relative isolate flex min-h-[min(var(--max-height-bounds),100dvh)] w-9/10 flex-col items-center justify-center py-(--py) text-body-emphasis [--py:clamp(--spacing(24),4.5vw+2rem,--spacing(32))]',
        'before:absolute before:inset-y-0 before:-z-50 before:w-screen before:bg-body',
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
