import { ark } from '@ark-ui/react/factory';
import { type ComponentProps } from 'react';

import type { MergeProps } from '@/types/MergeProps';

export type TextProps = MergeProps<{ small?: boolean }, ComponentProps<typeof ark.p>>;

export const Text = ({ small, ...props }: TextProps) => {
  const Comp = ark[small ? 'small' : 'p'];

  return <Comp {...props} />;
};
