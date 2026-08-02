import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';
import { ButAnim } from '@/components/layout/Blocks/But/Anim';

export type ButProps = Omit<SectionProps, 'asChild'>;

export const ButEdgeAnim = {
  from: {
    scaleY: 0
  },
  to: {
    scaleY: 1
  },
  start: 'bottom bottom',
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export const But = ({ className, children, ...props }: ButProps) => {
  return (
    <ButAnim>
      <Section
        className={cn('z-10 w-full justify-start', className)}
        {...props}
      >
        <div className='sticky top-0 flex min-h-(--h) w-full items-center justify-center overflow-hidden'>
          {children}
        </div>

        <div className='absolute top-0 mt-px w-dvw -translate-y-full'>
          <AnimateOnScroll config={ButEdgeAnim}>
            <svg
              className='size-full origin-bottom-left fill-body will-change-transform'
              viewBox='0 0 1353 108'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M676.5 0C1059.15 0.106844 1278.97 108 1352.43 108H0C73.4995 108 293.501 8.03679e-05 676.5 0Z' />
            </svg>
          </AnimateOnScroll>
        </div>

        <div className='absolute bottom-0 mb-px w-dvw translate-y-full rotate-180'>
          <AnimateOnScroll config={ButEdgeAnim}>
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
