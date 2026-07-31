import { ark } from '@ark-ui/react/factory';
import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type TextProps = MergeProps<{ small?: boolean }, ComponentProps<typeof ark.p>>;

export const Text = ({ small, className, children, ...props }: TextProps) => {
  const Comp = ark[small ? 'small' : 'p'];

  return (
    <Comp
      className={cn('[&_p]:not-first:mt-[1em]', className)}
      {...props}
    >
      {children}
    </Comp>
  );
};
