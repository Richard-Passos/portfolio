'use client';

import { useEffect, useRef, RefObject } from 'react';
import { ReactLenis, LenisRef, LenisProps } from 'lenis/react';
import { gsap } from '@/hooks/useGSAP';
import { setRefs } from '@/utils/setRefs';
import { MergeProps } from '@/types/MergeProps';

export type SmoothScrollProps = MergeProps<{ ref?: RefObject<LenisRef | null> }, LenisProps>;

export const SmoothScroll = ({ ref, options,  ...props }: SmoothScrollProps) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    
    return () => {
      gsap.ticker.remove(update);
    };
  }, [lenisRef]);

  return (
    <ReactLenis 
      root 
      ref={setRefs(ref, lenisRef)}
      options={{ ...options, autoRaf: false, duration: 0.8 }}
      {...props}
    />
  )
}