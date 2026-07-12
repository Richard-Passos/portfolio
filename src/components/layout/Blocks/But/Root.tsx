import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';

import { FingerprintIcon } from '@/components/system/Icons/Fingerprint';
import { StaggeredTitleOnView } from '@/components/motion/Title/StaggeredOnView';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';

export type ButProps = SectionProps;

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

export const But = ({ className, ...props }: ButProps) => {
  return (
    <Section
      className={cn(
        'min-h-[calc(var(--h)*1.5)] justify-start [--h:min(100dvh,var(--max-height-bounds))]',
        className
      )}
      {...props}
    >
      <AnimateOnScroll {...ButAnimation}>
        <div className='sticky top-0 flex h-(--h) items-center justify-center'>
          <div className='relative'>
            <Title
              data-animate
              className='group text-center text-[clamp(8rem,44vw,32rem)]/none font-bold tracking-tighter text-primary uppercase'
            >
              MAS
            </Title>

            <StaggeredTitleOnView
              as='h6'
              aria-label='Não só tecnologia'
              className='absolute bottom-0 flex w-full flex-col text-center text-9xl'
              from={{ start: 'bottom bottom' }}
            >
              <span className='mr-auto'>Não só</span> <span className='ml-auto'>tecnologia</span>
            </StaggeredTitleOnView>

            <FingerprintIcon
              data-animate
              className='absolute top-0 right-0 text-[clamp(4rem,22vw,16rem)]/none'
            />
          </div>
        </div>
      </AnimateOnScroll>
    </Section>
  );
};
