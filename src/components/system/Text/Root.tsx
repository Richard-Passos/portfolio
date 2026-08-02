import { ark } from '@ark-ui/react/factory';
import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { hasOnlyDirectTag } from '@/utils/hasOnlyDirectTag';

export type TextProps = MergeProps<{ small?: boolean }, ComponentProps<typeof ark.p>>;

export const Text = ({ small, className, children, ...props }: TextProps) => {
  const Comp = ark[small ? 'small' : 'p'];

  return (
    <Comp
      asChild={hasOnlyDirectTag(children, ['div', 'small', 'section', 'p'])}
      className={cn('[&_p]:not-first:mt-[1em]', className)}
      {...props}
    >
      {children}
    </Comp>
  );
};
