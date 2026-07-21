'use client';

import { SplitText, gsap } from '@/hooks/useGSAP';
import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/motion/Animate';

export type StaggeredTitleAnimOnViewProps = Omit<AnimateOnScrollProps, 'config'>;

export const StaggeredTitleAnimOnView = (props: StaggeredTitleAnimOnViewProps) => {
  return (
    <AnimateOnScroll
      config={(el) => {
        const split = SplitText.create(el, { type: 'chars' });

        gsap.from(split.chars, {
          y: 50,
          opacity: 0,
          stagger: 0.016,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse'
          }
        });
      }}
      {...props}
    />
  );
};
