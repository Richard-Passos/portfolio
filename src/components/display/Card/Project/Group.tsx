'use client';

import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { AnimateOnScroll } from '@/components/motion/Animate';
import { gsap } from '@/hooks/useGSAP';

export type ProjectCardGroupProps = SlotElementProps<'ul'>;

export const ProjectCardGroup = ({ className, ...props }: ProjectCardGroupProps) => {
  return (
    <AnimateOnScroll
      config={(el) => {
        const mm = gsap.matchMedia();

        mm.add('(min-width: 768px)', () => {
          gsap.fromTo(
            'li',
            {
              '--y1': '0px',
              '--y2': '-192px'
            },
            {
              ease: 'none',
              '--y1': '-192px',
              '--y2': '0px',
              scrollTrigger: {
                trigger: el,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top'
              }
            }
          );
        });
      }}
    >
      <SlotElement
        tag='ul'
        className={cn('grid w-full gap-4 sm:grid-cols-2 sm:pt-48 lg:grid-cols-3', className)}
        {...props}
      />
    </AnimateOnScroll>
  );
};
