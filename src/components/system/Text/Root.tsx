import { ark } from '@ark-ui/react/factory';
import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';

export type TextProps = MergeProps<{ small?: boolean }, ComponentProps<typeof ark.p>>;

export const Text = ({ small, ...props }: TextProps) => {
  const Comp = ark[small ? 'small' : 'p'];

  return <Comp {...props} />;
};
