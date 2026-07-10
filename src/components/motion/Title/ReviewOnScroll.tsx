'use client';

import { useRef } from 'react';
import { Slot, SlotProps } from '@/components/misc/Slot';
import { setRefs } from '@/utils/setRefs';
import { gsap, useGSAP, SplitText } from '@/hooks/useGSAP';
import { cn } from '@/utils/cn';

export type ReviewTitleOnScrollProps = SlotProps;

export const ReviewTitleOnScroll = ({ className, ref, ...props }: ReviewTitleOnScrollProps) => {
  const innerRef = useRef<HTMLSlotElement>(null);

  useGSAP(() => {
    const el = innerRef.current;
    const parent = el?.parentElement;
    if(!el || !parent) return;

    const split = SplitText.create(el, { type: 'chars' });
    const height = window.innerHeight

    const review_tween = gsap.fromTo(split.chars, { scale: '.85' }, {
      color: gsap.getProperty(parent, 'color'),
      scale: '1',
      stagger: 0.126,
      scrollTrigger: {
        trigger: el,
        start: 'center 75%',
        end: `+=${height}`,
        scrub: true
      }
    });

    const scroll_tween = gsap.to(el, {
      x: parent.offsetWidth - el.offsetWidth,
      scrollTrigger: {
        trigger: el,
        start: 'center center', 
        end: `+=${height * .75}`,
        scrub: true
      } 
    });

    return () => {
      review_tween.kill()
      scroll_tween.kill()
    }
  }, { scope: innerRef })
 
  return <Slot ref={setRefs(ref, innerRef)} className={cn('will-change-transform *:will-change-[color]', className)} {...props}/>;
};