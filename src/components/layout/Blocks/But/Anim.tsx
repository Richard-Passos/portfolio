'use client';

import { cn } from '@/utils/cn';

import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/motion/Animate';
import { gsap } from '@/hooks/useGSAP';

export type ButAnimProps = Omit<AnimateOnScrollProps, 'config'>;

export const ButAnim = ({ className, ...props }: ButAnimProps) => {
  return (
    <AnimateOnScroll
      config={(el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: '15% bottom',
            end: `+=${el.offsetHeight * 0.85}`,
            scrub: true
          }
        });

        tl.from('[data-title]', {
          y: '-150%',
          duration: 2
        })

          .to(
            '[data-badge]',
            {
              scale: 40,
              opacity: 0,
              duration: 1
            },
            '>+0.2'
          )

          .from(
            '[data-text]',
            {
              opacity: 0,
              y: 120,
              clipPath: 'inset(100% 0 0 0)',
              duration: 1
            },
            '>-0.2'
          );
      }}
      className={cn('min-h-[calc(var(--h)*3)]', className)}
      {...props}
    />
  );
};
