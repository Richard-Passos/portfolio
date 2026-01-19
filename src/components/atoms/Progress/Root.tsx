import { Progress, ProgressProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type ProgressAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type ProgressAtomProps = ProgressAtomOwnProps &
  Omit<ProgressProps, keyof ProgressAtomOwnProps>;

const ProgressAtom = ({ className, ...props }: ProgressAtomProps) => {
  return (
    <Progress
      className={cn(
        '[--progress-size-xs:calc(.1em*var(--mantine-scale))]',
        className
      )}
      {...props}
    />
  );
};

export default ProgressAtom;
export type { ProgressAtomProps };
