'use client';

import { gsap } from '@/hooks/useGSAP';
import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/motion/Animate';

export type ImageReviewClientProps = Omit<AnimateOnScrollProps, 'config'>;

export const ImageReviewClient = (props: ImageReviewClientProps) => {
  return (
    <AnimateOnScroll
      config={(el) => {
        gsap.from('img', {
          ease: 'none',
          scale: 1.1,
          duration: 0.7,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top 75%',
            end: 'center center'
          }
        });

        gsap.to('[data-front]', {
          ease: 'none',
          y: '100%',
          duration: 0.7,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top 75%',
            end: 'center center'
          }
        });
      }}
      {...props}
    />
  );
};
