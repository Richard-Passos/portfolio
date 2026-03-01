import { type ReactNode } from 'react';

import { Section, SectionProps } from '@/components/layout/wrappers';
import { Lines } from '@/components/misc';
import { Title } from '@/components/system';
import type { MergeProps } from '@/types';
import { cn } from '@/utils';

import { PrimaryHeroScrollAnimate } from './ScrollAnimate';

type PrimaryHeroOwnProps = {
  data: {
    title: ReactNode;
    description: ReactNode;
    left: ReactNode;
    right: ReactNode;
  };
};

type PrimaryHeroProps = MergeProps<PrimaryHeroOwnProps, SectionProps>;

const PrimaryHero = ({ data, className, ...props }: PrimaryHeroProps) => {
  return (
    <Section
      className={cn(
        '3xl:[--inset:calc(var(--max-width-bounds)*.025)] p-(--inset) pt-0 [--inset:2.5vw]',
        className
      )}
      forceTheme
      {...props}
    >
      <div className='border-gray-3 dark:border-dark-4 relative flex w-full grow overflow-hidden rounded-lg border'>
        <PrimaryHeroScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full max-w-7xl grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)] sm:scale-(--scale) sm:opacity-(--opacity)'>
              <Title className='w-full tracking-tighter wrap-break-word uppercase lg:leading-none'>
                {data.title}
              </Title>

              <div className='mt-3 grid w-full grid-cols-3 gap-3'>
                <div>{data.left}</div>

                <div className='col-end-4 justify-self-end text-end lg:order-last'>
                  {data.right}
                </div>

                <section className='col-span-full max-w-md justify-self-center text-center lg:sr-only'>
                  {data.description}
                </section>
              </div>
            </div>

            <Lines className='text-gray-3 dark:text-dark-4 -z-10 h-full translate-y-0 bg-size-[83.333px_66.666px]' />
          </div>
        </PrimaryHeroScrollAnimate>
      </div>
    </Section>
  );
};

export { PrimaryHero };
export type { PrimaryHeroProps };
