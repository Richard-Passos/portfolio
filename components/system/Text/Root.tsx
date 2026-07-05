import { ark } from '@ark-ui/react/factory';
import { type ComponentProps } from 'react';

import { MergeProps } from '@/types';

export type TextProps = MergeProps<{ as?: 'p' | 'small' }, ComponentProps<typeof ark.p>>;

export const Text = ({ as = 'p', ...props }: TextProps) => {
  const Comp = ark[as];

  return <Comp {...props} />;
};
