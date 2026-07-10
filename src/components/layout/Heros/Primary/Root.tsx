import { ReactNode } from 'react';

import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollYLines } from '@/components/misc/Lines/variants/ScrollY';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { StaggeredTitleOnView } from '@/components/motion/Title/StaggeredOnView';
import { Title } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export const PrimaryHeroAnimation = {
  from: {
    y: '0%',
    scale: 1,
    opacity: 1
  },
  to: {
    y: '75%',
    scale: 0.85,
    opacity: 0
  },
  start: 'bottom bottom',
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export type PrimaryHeroProps = MergeProps<
  {
    data: {
      title: ReactNode;
      description: ReactNode;
      left: ReactNode;
      right: ReactNode;
    };
  },
  SectionProps
>;

export const PrimaryHero = ({ data, className, ...props }: PrimaryHeroProps) => {
  return (
    <Section
      forceTheme
      className={cn(
        '3xl:[--inset:calc(var(--max-width-bounds)*.025)] isolate p-(--inset) pt-0 [--inset:2.5vw] [clip-path:inset(0_0_var(--inset)_0)]',
        className
      )}
      {...props}
    >
      <AnimateOnScroll {...PrimaryHeroAnimation}>
        <div className='flex size-full max-w-7xl grow flex-col items-center justify-center'>
          <StaggeredTitleOnView>
            <Title
              as='h1'
              className='flex max-w-5xl flex-wrap gap-x-[.3em] wrap-break-word uppercase max-sm:text-center'
            >
              {data.title}
            </Title>
          </StaggeredTitleOnView>

          <section className='mt-4 grid w-full grid-cols-6 gap-3'>
            <div>{data.left}</div>

            <section className='col-span-full max-w-md justify-self-center text-center lg:col-span-4'>
              {data.description}
            </section>

            <div className='justify-self-end text-end max-lg:col-end-7 max-lg:row-start-1'>
              {data.right}
            </div>
          </section>
        </div>
      </AnimateOnScroll>

      <ScrollYLines className='absolute inset-x-(--inset) top-0 bottom-(--inset) -z-10 bg-size-[83.333px_66.666px]' />
    </Section>
  );
};
