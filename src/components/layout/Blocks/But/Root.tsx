import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';

import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';

export type ButProps = MergeProps<
  { data: { title: ReactNode; text: ReactNode; icon: ReactNode } },
  SectionProps
>;

export const ButAnimation = {
  target: '[data-animate]',
  from: {
    y: 100,
    scale: 0.85,
    filter: 'blur(20px)'
  },
  to: {
    y: 0,
    scale: 1,
    filter: 'blur(0px)'
  },
  end: 'top top'
} satisfies AnimateOnScrollConfig;

export const But = ({ data, className, ...props }: ButProps) => {
  return (
    <Section
      className={cn(
        'min-h-[calc(var(--h)*2)] justify-start [--h:min(100dvh,var(--max-height-bounds))]',
        className
      )}
      {...props}
    >
      <AnimateOnScroll {...ButAnimation}>
        <div className='sticky top-0 flex h-(--h) items-center justify-center'>
          <Title
            data-animate
            className='text-center text-[clamp(8rem,44vw,32rem)]/none font-bold tracking-tighter text-primary uppercase'
          >
            {data.title}
          </Title>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll {...ButAnimation}>
        <div className='absolute bottom-(--py) flex h-(--h) items-center justify-center'>
          <div className='relative'>
            <Title className='invisible text-center text-[clamp(8rem,44vw,32rem)]/none font-bold tracking-tighter text-primary uppercase'>
              {data.title}
            </Title>

            <StaggeredTitleOnView
              as='h6'
              aria-label='Nem tudo é tecnologia'
              className='absolute bottom-0 flex w-full flex-col text-9xl'
              from={{ start: 'bottom bottom' }}
            >
              {data.text}
            </StaggeredTitleOnView>

            <div
              data-animate
              className='absolute top-0 right-0 -z-10 text-[clamp(4rem,22vw,16rem)]/none'
            >
              {data.icon}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </Section>
  );
};
