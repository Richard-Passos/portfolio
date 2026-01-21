import { Divider, DividerProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type DividerAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type DividerAtomProps = DividerAtomOwnProps &
  Omit<DividerProps, keyof DividerAtomOwnProps>;

const DividerAtom = ({ className, ...props }: DividerAtomProps) => {
  return (
    <Divider
      className={cn(
        `[--divider-color:var(--color-border)] dark:[--divider-color:var(--color-border)]`,
        className
      )}
      {...props}
    />
  );
};

export default DividerAtom;
export type { DividerAtomProps };
