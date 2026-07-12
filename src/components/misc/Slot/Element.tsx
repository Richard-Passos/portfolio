import { JSX } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot/Root';

export type SlotElementProps<T extends keyof JSX.IntrinsicElements> = SlotAsChildProps<
  JSX.IntrinsicElements[T]
>;

export const SlotElement = <T extends keyof JSX.IntrinsicElements>({
  tag = 'div',
  asChild,
  ...props
}: { tag?: T } & SlotElementProps<T>) => {
  const Comp = asChild ? Slot : tag;

  return <Comp {...props} />;
};
