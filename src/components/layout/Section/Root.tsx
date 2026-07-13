import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { SectionClient, SectionClientProps } from './Client';

export type SectionProps = MergeProps<
  Pick<SectionClientProps, 'theme' | 'forceTheme'>,
  SlotElementProps<'section'>
>;

export const Section = ({ theme, forceTheme, className, ref, ...props }: SectionProps) => {
  return (
    <SectionClient
      theme={theme}
      forceTheme={forceTheme}
    >
      <SlotElement
        tag='section'
        data-theme={theme}
        className={cn(
          'relative isolate flex w-9/10 flex-col items-center justify-center py-(--py) text-body-emphasis [--py:clamp(--spacing(24),4.5vw+2rem,--spacing(32))]',
          'before:absolute before:inset-y-0 before:-z-50 before:w-screen before:rounded-inherit before:bg-body',
          className
        )}
        {...props}
      />
    </SectionClient>
  );
};
