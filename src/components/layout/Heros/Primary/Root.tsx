import { ReactNode } from 'react';

import { Section, SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

import { ScrollYLines } from '@/components/misc/Lines/variants/ScrollY';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { StaggeredTitleOnView } from '@/components/motion/Title/StaggeredOnView';

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
  start: 'bottom bottom',
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

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
        'p-(--inset) pt-0 [--inset:2.5vw] 3xl:[--inset:calc(var(--max-width-bounds)*.025)] isolate [clip-path:inset(0_0_var(--inset)_0)]', 
        className
      )} 
      {...props}
    >
        <AnimateOnScroll {...PrimaryHeroAnimation}>
        <div className='flex size-full max-w-7xl grow flex-col items-center justify-center'>
              <StaggeredTitleOnView>
                <Title
                  as='h1'
                  className='flex flex-wrap gap-x-[.3em] wrap-break-word uppercase max-sm:text-center max-w-5xl'
                >
                  {data.title}
                </Title>
              </StaggeredTitleOnView>

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

      <ScrollYLines
        className='absolute top-0 bottom-(--inset) -z-10 inset-x-(--inset) bg-size-[83.333px_66.666px]'
      />
    </Section>
  );
};
