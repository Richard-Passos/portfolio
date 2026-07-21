'use client';

import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/motion/Animate';
import { gsap } from '@/hooks/useGSAP';
import { cn } from '@/utils/cn';

export type FooterAnimProps = Omit<AnimateOnScrollProps, 'config'>;

export const FooterAnim = ({ className, ...props }: FooterAnimProps) => {
  return (
    <AnimateOnScroll
      config={(el) => {
        gsap.from('[data-animate]', {
          ease: 'none',
          y: '50%',
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: 'top bottom',
            end: `+=${Math.min(el.offsetHeight, window.innerHeight)}`
          }
        });
      }}
      className={cn(
        '**:data-animate:will-change-transform **:data-animate:has-focus-visible:transform-[translateY(0)]!',
        className
      )}
      {...props}
    />
  );
};
