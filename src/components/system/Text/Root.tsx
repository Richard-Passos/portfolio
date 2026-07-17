import { ark } from '@ark-ui/react/factory';
import { Children, ComponentProps, isValidElement } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type TextProps = MergeProps<{ small?: boolean }, ComponentProps<typeof ark.p>>;

export const Text = ({ small, className, children, ...props }: TextProps) => {
  const isPlainText = Children.toArray(children).every(
    (child) => typeof child === 'string' || typeof child === 'number'
  );

  const Comp = ark[small ? 'small' : isPlainText ? 'p' : 'section'];

  return (
    <Comp
      className={cn(!isPlainText && '[&_p]:not-first:mt-[1em]', className)}
      {...props}
    >
      {children}
    </Comp>
  );
};
