'use client';

import { MotionValue, motion, useTransform } from 'motion/react';
import { ComponentProps, PropsWithChildren } from 'react';

import { cn } from '@/utils';

type TextScrollAnimateWordMoleculeOwnProps = PropsWithChildren<{
  progress: MotionValue<number>;
  range: [any, any];
}>;

type TextScrollAnimateWordMoleculeProps =
  TextScrollAnimateWordMoleculeOwnProps &
    Omit<
      ComponentProps<typeof motion.span>,
      keyof TextScrollAnimateWordMoleculeOwnProps
    >;

const TextScrollAnimateWordMolecule = ({
  progress,
  range,
  className,
  style,
  children,
  ...props
}: TextScrollAnimateWordMoleculeProps) => {
  const x = useTransform(progress, range, ['100%', '0%']);

  return (
    <motion.span
      aria-hidden
      className={cn('relative inline-block', className)}
      style={
        {
          '--x': x,
          ...style
        } as typeof style
      }
      {...props}
    >
      <span className={`absolute inset-0 [clip-path:inset(0_var(--x)_0_0)]`}>
        {children}
      </span>

      <span
        className={`pointer-events-none opacity-10 select-none dark:opacity-[.05]`}
      >
        {children}
      </span>
    </motion.span>
  );
};

export default TextScrollAnimateWordMolecule;
export type { TextScrollAnimateWordMoleculeProps };
