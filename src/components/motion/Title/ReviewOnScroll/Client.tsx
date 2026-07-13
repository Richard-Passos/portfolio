'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { SplitText, gsap, useGSAP } from '@/hooks/useGSAP';
import { setRefs } from '@/utils/setRefs';
import { MergeProps } from '@/types/MergeProps';

export type ReviewTitleOnScrollClientProps = MergeProps<{ target: gsap.DOMTarget }, SlotProps>;

export const ReviewTitleOnScrollClient = ({
  target,
  ref,
  ...props
}: ReviewTitleOnScrollClientProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const container = innerRef.current;
      if (!container) return;

      const split = SplitText.create(target, { type: 'chars' });
      const width = container.getBoundingClientRect().width;
      const height = container.getBoundingClientRect().height;
      const tarwidth = Number(gsap.getProperty(target, 'width'));

      const reviewTween = gsap.fromTo(
        split.chars,
        {
          scale: 0.85
        },
        {
          color: gsap.getProperty(container, 'color'),
          scale: 1,
          stagger: 0.6,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 25%',
            end: 'bottom bottom',
            scrub: true
          }
        }
      );

      const scrollTween = gsap.to(target, {
        x: width - tarwidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      const scrollContainerTween = gsap.to(container, {
        y: height * 0.225,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'bottom bottom',
          end: `+=${height * 0.225}`,
          scrub: true
        }
      });

      return () => {
        split.revert();
        reviewTween.kill();
        scrollTween.kill();
        scrollContainerTween.kill();
      };
    },
    {
      scope: innerRef,
      dependencies: [target]
    }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
