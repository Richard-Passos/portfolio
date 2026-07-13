import { ComponentProps, JSX, JSXElementConstructor } from 'react';

import { Slot } from '@/components/misc/Slot/Root';
import { MergeProps } from '@/types/MergeProps';

type Tag = keyof JSX.IntrinsicElements;
type TagProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
  ComponentProps<T>;

export type SlotElementProps<T extends Tag> = MergeProps<{ asChild?: boolean }, TagProps<T>>;

export const SlotElement = <T extends Tag>({
  tag,
  asChild,
  ...props
}: { tag: T } & SlotElementProps<T>) => {
  const Comp = asChild ? Slot : tag;

  // @ts-ignore
  return <Comp {...props} />;
};
