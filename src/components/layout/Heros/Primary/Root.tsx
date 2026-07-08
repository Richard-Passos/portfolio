import { type ReactNode } from 'react';

import { Section, type SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';
import type { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

import { ScrollYLines } from '@/components/misc/Lines/variants/ScrollY';
import { type UseAnimateOnScrollOptions } from '@/hooks/useAnimateOnScroll';
import { AnimateOnScroll } from '@/components/motion/Animate/OnScroll';
import { Staggered } from '@/components/motion/Staggered';

export const PrimaryHeroAnimation = {
  from: {
    y: '0%',
    scale: 1,
    opacity: 1,
  },
  to: {
    y: '75%',
    scale: .85,
    opacity: 0,
  },
  start: 0,
  end: 'bottom top'
} satisfies UseAnimateOnScrollOptions['config'];

export type PrimaryHeroProps = MergeProps<{
  data: {
    title: ReactNode;
    description: ReactNode;
    left: ReactNode;
    right: ReactNode;
  };
}, SectionProps>;

export const PrimaryHero = ({ data, className, ...props }: PrimaryHeroProps) => {
  return (
    <Section
      forceTheme
      className={cn(
        'p-(--inset) pt-0 [--inset:2.5vw] 3xl:[--inset:calc(var(--max-width-bounds)*.025)] overflow-hidden isolate',
        className
      )}
      {...props}
    >
      <div className='flex flex-col justify-center items-center w-full grow overflow-hidden'>
        <AnimateOnScroll {...PrimaryHeroAnimation}>
        <div
              className='flex w-full max-w-7xl grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)]'
            >
              <Staggered type='chars'>
                <Title
                as='h1'
                className='flex flex-wrap gap-x-[.3em] wrap-break-word uppercase max-sm:text-center max-w-5xl'
              >
                {data.title}
              </Title>
              </Staggered>

              <section className='mt-4 grid w-full grid-cols-6 gap-3'>
                <div>
                  {data.left}
                </div>

                <section className='col-span-full max-w-md justify-self-center text-center lg:col-span-4'>
                  {data.description}
                </section>

                <div className='justify-self-end text-end max-lg:col-end-7 max-lg:row-start-1'>
                  {data.right}
                </div>
              </section>
            </div>
      </AnimateOnScroll>
      </div>

      <ScrollYLines className='absolute top-0 bottom-(--inset) -z-10 inset-x-(--inset) bg-size-[83.333px_66.666px]' />
    </Section>
  );
};
