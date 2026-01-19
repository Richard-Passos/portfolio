'use client';

import { useLenis } from '@studio-freight/react-lenis';

import Slot, { SlotProps } from '@/components/atoms/Slot';

type ScrollToAtomOwnProps = {
  target: number | string | HTMLElement;
};

type ScrollToAtomProps = ScrollToAtomOwnProps &
  Omit<SlotProps, keyof ScrollToAtomOwnProps>;

const ScrollToAtom = ({ target, ...props }: ScrollToAtomProps) => {
  const lenis = useLenis();

  return (
    <Slot
      {...props}
      onClick={(ev) => {
        lenis?.scrollTo(target, {
          duration: 2,
          easing: (x) =>
            x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2 // easeInOutQuart
        });

        props.onClick?.(ev);
      }}
    />
  );
};

export default ScrollToAtom;

export type { ScrollToAtomProps };
