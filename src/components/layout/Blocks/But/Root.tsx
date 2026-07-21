import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';

import { AnimateOnScroll } from '@/components/motion/Animate';
import { MergeProps } from '@/types/MergeProps';
import { ReactNode } from 'react';
import { Title } from '@/components/system/Title';
import { ButAnim } from '@/components/layout/Blocks/But/Anim';
import { Text } from '@/components/system/Text';
import { Lines } from '@/components/misc/Lines';

export type ButProps = MergeProps<{ data: { title: ReactNode; text: ReactNode } }, SectionProps>;

export const But = ({ data, className, ...props }: ButProps) => {
  return (
    <ButAnim>
      <Section
        className={cn('z-10 w-full justify-start', className)}
        {...props}
      >
        <div className='sticky top-0 flex h-(--h) w-full items-center justify-center overflow-hidden'>
          <div
            data-badge
            className='absolute overflow-hidden rounded-full border px-4 py-12'
          >
            <Title
              data-title
              styleAs='h1'
              className='[writing-mode:vertical-rl]'
            >
              {data.title}
            </Title>
          </div>

          <Text
            data-text
            className='max-w-lg text-center text-5xl md:text-7xl'
          >
            {data.text}
          </Text>
        </div>

        <div className='absolute top-0 mt-px w-[calc(100vw-var(--radius-4xl))] -translate-y-full'>
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
    </ButAnim>
  );
};
