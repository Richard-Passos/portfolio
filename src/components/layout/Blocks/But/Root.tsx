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
        'z-10 min-h-[calc(var(--h)*2)] justify-start [--h:min(100dvh,var(--max-height-bounds))]',
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

      <div className='absolute top-0 mt-px w-[calc(100vw-40px)] -translate-y-full'>
        <AnimateOnScroll
          config={{
            from: {
              scaleY: 0
            },
            to: {
              scaleY: 1
            },
            start: 'bottom bottom',
            end: 'bottom top'
          }}
        >
          <svg
            className='size-full origin-bottom-left fill-body will-change-transform'
            viewBox='0 0 1353 108'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M676.5 0C1059.15 0.106844 1278.97 108 1352.43 108H0C73.4995 108 293.501 8.03679e-05 676.5 0Z' />
          </svg>
        </AnimateOnScroll>
      </div>

      <div className='absolute bottom-0 mb-px w-[calc(100vw-var(--radius-4xl))] translate-y-full rotate-180'>
        <AnimateOnScroll
          config={{
            from: {
              scaleY: 0
            },
            to: {
              scaleY: 1
            },
            start: 'bottom bottom',
            end: 'bottom top'
          }}
        >
          <svg
            className='size-full origin-bottom-left fill-body will-change-transform'
            viewBox='0 0 1353 108'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M676.5 0C1059.15 0.106844 1278.97 108 1352.43 108H0C73.4995 108 293.501 8.03679e-05 676.5 0Z' />
          </svg>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};
