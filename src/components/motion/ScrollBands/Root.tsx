import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type ScrollBandsProps = ComponentProps<'ul'>;

export const ScrollBands = ({ className, ...props }: ScrollBandsProps) => {
  return (
    <ul
      className={cn('w-full overflow-x-clip', className)}
      {...props}
    />
  );
};
