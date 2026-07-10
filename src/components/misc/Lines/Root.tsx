import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export type LinesProps = ComponentProps<'div'>;

export const Lines = ({ className, ...props }: LinesProps) => {
  return (
    <div
      className={cn(
        'absolute inset-x-0 top-0 h-full bg-[linear-gradient(currentColor_.8px,transparent_.8px),linear-gradient(to_right,currentColor_.8px,transparent_.8px)] bg-size-[250px_200px] bg-center text-border dark:opacity-25',
        className
      )}
      {...props}
    />
  );
};
