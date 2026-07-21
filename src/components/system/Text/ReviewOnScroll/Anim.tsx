'use client';

import { SplitText, gsap } from '@/hooks/useGSAP';
import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/motion/Animate';

export type ReviewTextOnScrollAnimProps = Omit<AnimateOnScrollProps, 'config'>;

export const ReviewTextOnScrollAnim = (props: ReviewTextOnScrollAnimProps) => {
  return (
    <AnimateOnScroll
      data-text-review
      config={(el) => {
        const split = SplitText.create(el, {
          type: 'words',
          wordsClass: 'word'
        });

        gsap.fromTo(
          split.words,
          {
            backgroundSize: '0% 100%, 100% 100%'
          },
          {
            ease: 'none',
            backgroundSize: '100% 100%, 100% 100%',
            stagger: 1,
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: 'top 75%',
              end: 'bottom 75%'
            }
          }
        );
      }}
      {...props}
    />
  );
};
