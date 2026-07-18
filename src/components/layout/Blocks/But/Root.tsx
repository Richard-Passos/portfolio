import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';

import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';
import { ReviewTextOnScroll } from '@/components/system/Text/ReviewOnScroll';

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
  }
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
      <AnimateOnScroll config={ButAnimation}>
        <div className='sticky top-0 flex h-(--h) items-center justify-center'>
          <Title
            data-animate
            styleAs='h1'
            className='text-center text-[clamp(8rem,44vw,32rem)]/none tracking-tighter text-primary'
          >
            {data.title}
          </Title>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll config={ButAnimation}>
        <div className='absolute bottom-(--py) flex h-(--h) items-center justify-center'>
          <div className='relative'>
            <Title
              styleAs='h1'
              className='invisible text-center text-[clamp(8rem,44vw,32rem)]/none tracking-tighter text-primary'
            >
              {data.title}
            </Title>

            <ReviewTextOnScroll
              start='bottom bottom'
              className='absolute bottom-0 flex w-full flex-col text-9xl'
            >
              {data.text}
            </ReviewTextOnScroll>

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
