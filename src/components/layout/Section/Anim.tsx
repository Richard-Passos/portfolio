'use client';

import { useCallback, useEffect, useRef } from 'react';

import { useThemeContext } from '@/contexts/Theme';
import { ScrollTrigger, useGSAP } from '@/hooks/useGSAP';
import { Theme } from '@/types/Theme';
import { Slot, SlotProps } from '@/components/misc/Slot';
import { setRefs } from '@/utils/setRefs';
import { MergeProps } from '@/types/MergeProps';

export type SectionAnimProps = MergeProps<{ theme: Theme; forceTheme?: boolean }, SlotProps>;

export const SectionAnim = ({ theme, forceTheme, ref, ...props }: SectionAnimProps) => {
  const { setTheme } = useThemeContext();
  const innerRef = useRef<HTMLSlotElement>(null);

  const applyTheme = useCallback(() => {
    setTheme(theme);
  }, [theme]);

  useEffect(() => {
    const rect = innerRef.current?.getBoundingClientRect();
    if (!forceTheme || !rect) return;

    const isTargetInView =
      rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;

    if (isTargetInView) {
      applyTheme();
    }
  }, [forceTheme]);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 10%',
        end: 'bottom 10%',
        onEnter: applyTheme,
        onEnterBack: applyTheme
      });
    },
    {
      scope: innerRef,
      dependencies: [applyTheme]
    }
  );

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};
