import { ark } from '@ark-ui/react/factory';
import { Children, ComponentProps, isValidElement } from 'react';

import { MergeProps } from '@/types/MergeProps';

export type TextProps = MergeProps<{ small?: boolean }, ComponentProps<typeof ark.p>>;

export const Text = ({ small, children, ...props }: TextProps) => {
  const isPlainText = Children.toArray(children).every(
    (child) => typeof child === 'string' || typeof child === 'number'
  );

  const Comp = ark[small ? 'small' : isPlainText ? 'p' : 'section'];

  return <Comp {...props}>{children}</Comp>;
};
