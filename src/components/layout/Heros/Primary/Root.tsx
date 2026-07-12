import { ReactNode } from 'react';

import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollYLines } from '@/components/misc/Lines/variants/ScrollY';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { StaggeredTitleOnView } from '@/components/motion/Title/StaggeredOnView';
import { Title } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

import { PrimaryHeroCards, PrimaryHeroCardsProps } from './Cards';

export const PrimaryHeroAnimation = {
  target: 'h1',
  from: {
    y: '0%',
    scale: 1,
    opacity: 1
  },
  to: {
    y: '150%',
    scale: 0.75,
    opacity: 0
  },
  start: 0,
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export type PrimaryHeroProps = MergeProps<
  {
    data: {
      title: ReactNode;
    } & PrimaryHeroCardsProps['data'];
  },
  SectionProps
>;

export const PrimaryHero = ({ data, ...props }: PrimaryHeroProps) => {
  return (
    <AnimateOnScroll {...PrimaryHeroAnimation}>
      <Section
        forceTheme
        {...props}
      >
        <StaggeredTitleOnView
          as='h1'
          className='flex w-9/10 max-w-5xl flex-wrap gap-x-[.3em] wrap-break-word uppercase max-sm:text-center'
        >
          {data.title}
        </StaggeredTitleOnView>

        <PrimaryHeroCards
          data={{ left: data.left, center: data.center, right: data.right }}
          className='relative z-10'
        />

        <ScrollYLines className='inset-x-[-2.5vw] top-0 bottom-[calc(var(--py)+(--spacing(32)))] -z-10 bg-size-[83.333px_66.666px]' />

        {/* Used to hide title when it bypass the lines. */}
        <div className='absolute inset-x-0 bottom-(--py) h-32 bg-body' />
      </Section>
    </AnimateOnScroll>
  );
};
