'use client';

import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/motion/Animate';
import { gsap } from '@/hooks/useGSAP';
import { cn } from '@/utils/cn';

export type FooterAnimProps = Omit<AnimateOnScrollProps, 'config'>;

export const FooterAnim = ({ className, ...props }: FooterAnimProps) => {
  return (
    <AnimateOnScroll
      config={(el) => {
        const height = Math.min(el.offsetHeight, window.innerHeight);

        gsap.from('[data-animate]', {
          ease: 'none',
          y: height,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top bottom',
            end: `+=${height}`
          }
        });
      }}
      className={cn(
        '**:data-animate:will-change-transform has-focus-visible:**:data-animate:transform-[translateY(0)]!',
        className
      )}
      {...props}
    />
  );
};
