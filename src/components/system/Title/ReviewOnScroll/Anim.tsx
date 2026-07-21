'use client';

import { SplitText, gsap } from '@/hooks/useGSAP';
import { AnimateOnScroll, AnimateOnScrollProps } from '@/components/motion/Animate';
import { cn } from '@/utils/cn';

export type ReviewTitleOnScrollAnimProps = Omit<AnimateOnScrollProps, 'config'>;

export const ReviewTitleOnScrollAnim = ({ className, ...props }: ReviewTitleOnScrollAnimProps) => {
  return (
    <AnimateOnScroll
      data-title-review
      config={(el) => {
        const sticky = el.querySelector('[data-sticky]');
        const title = el.querySelector('[data-title]');
        if (!sticky || !title) return;

        const split = SplitText.create(title, {
          type: 'chars',
          charsClass: 'char'
        });

        split.chars.forEach((c) => {
          const text = c.textContent;

          c.innerHTML = `
            <span>${text}</span>
            <span class='char-copy char-copy-top'>${text}</span>
            <span class='char-copy char-copy-bottom'>${text}</span>
          `;
        });

        const elRect = el.getBoundingClientRect();
        const elWidth = elRect.width;
        const elHeight = elRect.height;
        const stickyHeight = sticky.getBoundingClientRect().height;
        const titleWidth = title.getBoundingClientRect().width;
        const remainWidth = elWidth - titleWidth;
        const remainHeight = elHeight - stickyHeight;

        gsap.from(split.chars, {
          ease: 'none',
          '--y1': '100%',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sticky,
            start: '75% bottom',
            end: `+=${stickyHeight * 0.25 + remainHeight}`,
            scrub: true
          }
        });

        gsap.from(split.chars, {
          ease: 'none',
          '--y2': '100%',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sticky,
            start: '82% bottom',
            end: `+=${stickyHeight * 0.18 + remainHeight + elHeight * 0.22}`,
            scrub: true
          }
        });

        gsap.to(title, {
          ease: 'none',
          x: remainWidth,
          scrollTrigger: {
            trigger: sticky,
            start: 'bottom bottom',
            end: `+=${remainHeight}`,
            scrub: true
          }
        });

        gsap.to(el, {
          ease: 'none',
          y: '22%',
          scrollTrigger: {
            trigger: el,
            start: 'bottom bottom',
            end: `+=${elHeight * 0.22}`,
            scrub: true
          }
        });
      }}
      className={cn('min-h-[calc(var(--h)*2)]', className)}
      {...props}
    />
  );
};
