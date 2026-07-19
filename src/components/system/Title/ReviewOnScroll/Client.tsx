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
      const containerParent = innerRef.current?.parentElement;
      if (!container || !containerParent) return;

      const split = SplitText.create(target, { type });
      const containerWidth = container.getBoundingClientRect().width;
      const containerHeight = container.getBoundingClientRect().height;
      const parentHeight = containerParent.getBoundingClientRect().height;
      const targetwidth = Number(gsap.getProperty(target, 'width'));
      const remainWidth = containerWidth - targetwidth;
      const remainHeight = parentHeight - containerHeight;

      const reviewTween = gsap.from(split[type], {
        ease: 'none',
        scale: 0.85,
        opacity: 0.016,
        stagger: 0.6,
        scrollTrigger: {
          trigger: container,
          start: '75% bottom',
          end: `+=${remainHeight + containerHeight * 0.25}`,
          scrub: true
        }
      });

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
        y: '24%',
        scrollTrigger: {
          trigger: containerParent,
          start: 'bottom bottom',
          end: `+=${parentHeight * 0.24}`,
          scrub: true
        }
      });

      return () => {
        split.revert();
        reviewTween.kill();
        scrollTween.kill();
        scrollParentTween.kill();
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
