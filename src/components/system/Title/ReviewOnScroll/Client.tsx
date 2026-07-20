'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { SplitText, gsap, useGSAP } from '@/hooks/useGSAP';
import { setRefs } from '@/utils/setRefs';
import { MergeProps } from '@/types/MergeProps';

export type ReviewTitleOnScrollClientConfig = {
  target: gsap.DOMTarget;
};

export type ReviewTitleOnScrollClientProps = MergeProps<ReviewTitleOnScrollClientConfig, SlotProps>;

export const ReviewTitleOnScrollClient = ({
  target,
  ref,
  ...props
}: ReviewTitleOnScrollClientProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const container = innerRef.current;
      const containerParent = innerRef.current?.parentElement;
      if (!container || !containerParent) return;

      const split = SplitText.create(target, { type: 'chars', charsClass: 'char' });
      split.chars.forEach((c) => {
        const text = c.textContent;

        c.innerHTML = `
          <span>${text}</span>
          <span class='char-copy char-copy-top'>${text}</span>
          <span class='char-copy char-copy-bottom'>${text}</span>
        `;
      });

      const containerWidth = container.getBoundingClientRect().width;
      const containerHeight = container.getBoundingClientRect().height;
      const parentHeight = containerParent.getBoundingClientRect().height;
      const targetwidth = Number(gsap.getProperty(target, 'width'));
      const remainWidth = containerWidth - targetwidth;
      const remainHeight = parentHeight - containerHeight;

      const review1Tween = gsap.fromTo(
        split.chars,
        {
          '--y1': '100%'
        },
        {
          ease: 'none',
          '--y1': '0%',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: '75% bottom',
            end: `+=${containerHeight * 0.25 + remainHeight}`,
            scrub: true
          }
        }
      );

      const review2Tween = gsap.fromTo(
        split.chars,
        { '--y2': '100%' },
        {
          ease: 'none',
          '--y2': '0%',
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: '82% bottom',
            end: `+=${containerHeight * 0.18 + remainHeight + parentHeight * 0.24}`,
            scrub: true
          }
        }
      );

      const scrollTween = gsap.to(target, {
        ease: 'none',
        x: remainWidth,
        scrollTrigger: {
          trigger: container,
          start: 'bottom bottom',
          end: `+=${remainHeight}`,
          scrub: true
        }
      });

      const scrollParentTween = gsap.to(containerParent, {
        ease: 'none',
        y: '22%',
        scrollTrigger: {
          trigger: containerParent,
          start: 'bottom bottom',
          end: `+=${parentHeight * 0.22}`,
          scrub: true
        }
      });

      return () => {
        split.revert();
        review1Tween.kill();
        review2Tween.kill();
        scrollTween.kill();
        scrollParentTween.kill();
      };
    },
    {
      scope: innerRef,
      dependencies: [target]
    }
  );

  return (
    <Slot
      data-title-animated
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
