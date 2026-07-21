'use client';

import { LenisProps, LenisRef, ReactLenis } from 'lenis/react';
import { Ref, useEffect, useRef } from 'react';

import { gsap } from '@/hooks/useGSAP';
import { MergeProps } from '@/types/MergeProps';
import { setRefs } from '@/utils/setRefs';

export type SmoothScrollProps = MergeProps<{ ref?: Ref<LenisRef> }, LenisProps>;

export const SmoothScroll = ({ ref, options, ...props }: SmoothScrollProps) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

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
  );
};
