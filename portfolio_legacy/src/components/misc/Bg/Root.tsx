import { ComponentProps } from 'react';

import { cn } from '@/utils';

type BgRootProps = ComponentProps<'div'>;

const BgRoot = ({ className, ...props }: BgRootProps) => {
  return (
    <div
      className={cn(
        'bg-body pointer-events-none absolute inset-y-0 -z-50 w-screen overflow-hidden',
        className
      )}
      {...props}
    />
  );
};

export { BgRoot };
export type { BgRootProps };
