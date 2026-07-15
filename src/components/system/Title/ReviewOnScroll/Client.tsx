'use client';

import { useRef } from 'react';

import { Slot, SlotProps } from '@/components/misc/Slot';
import { SplitText, gsap, useGSAP } from '@/hooks/useGSAP';
import { setRefs } from '@/utils/setRefs';
import { MergeProps } from '@/types/MergeProps';

export type ReviewTitleOnScrollClientConfig = {
  type?: 'lines' | 'words' | 'chars';
  target: gsap.DOMTarget;
};

export type ReviewTitleOnScrollClientProps = MergeProps<ReviewTitleOnScrollClientConfig, SlotProps>;

export const ReviewTitleOnScrollClient = ({
  type = 'chars',
  target,
  ref,
  ...props
}: ReviewTitleOnScrollClientProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(
    () => {
      const container = innerRef.current;
      if (!container) return;

      const split = SplitText.create(target, { type });
      const width = container.getBoundingClientRect().width;
      const height = container.getBoundingClientRect().height;
      const targetwidth = Number(gsap.getProperty(target, 'width'));

      const reviewTween = gsap.fromTo(
        split[type],
        {
          scale: 0.85,
          opacity: 0.016
        },
        {
          ease: 'none',
          scale: 1,
          opacity: 1,
          stagger: 0.6,
          scrollTrigger: {
            trigger: container,
            start: 'top 25%',
            end: 'bottom bottom',
            scrub: true
          }
        }
      );

      const scrollTween = gsap.to(target, {
        ease: 'none',
        x: width - targetwidth,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      const scrollContainerTween = gsap.to(container, {
        ease: 'none',
        y: height * 0.225,
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
      dependencies: [type, target]
    }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
