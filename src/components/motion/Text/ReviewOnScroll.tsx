'use client';

import { useRef } from 'react';
import { Slot, SlotProps } from '@/components/misc/Slot';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';
import { gsap, useGSAP, SplitText } from '@/hooks/useGSAP';

export type ReviewTextOnScrollProps = MergeProps<{ type: 'lines' | 'words' | 'chars' }, SlotProps>;

export const ReviewTextOnScroll = ({ type, ref, ...props }: ReviewTextOnScrollProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(() => {
    const el = innerRef.current;
    if(!el) return;

    const split = SplitText.create(el, { type });

    const tween = gsap.to(split[type], {
      color: '#f00',
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        end: 'bottom 75%',
        scrub: true
      }
    });

    return () => {
      tween.kill()
    }
  }, { scope: innerRef, dependencies: [type]})
 
  return <Slot ref={setRefs(ref, innerRef)} {...props}/>;
};