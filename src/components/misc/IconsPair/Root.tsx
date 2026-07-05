import { ComponentProps } from 'react';

import { MergeProps } from '@/types';
import { cn } from '@/utils';

import { IconsPairIcon, IconsPairIconProps } from './Icon';

type IconsPairRootProps = MergeProps<
  {
    first: IconsPairIconProps;
    second: IconsPairIconProps;
  },
  ComponentProps<'div'>
>;

const IconsPairRoot = ({
  first,
  second,
  className,
  ...props
}: IconsPairRootProps) => {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden', className)}
      {...props}
    >
      <IconsPairIcon {...first} />

      <IconsPairIcon {...second} />
    </div>
  );
};

export { IconsPairRoot };
export type { IconsPairRootProps };
