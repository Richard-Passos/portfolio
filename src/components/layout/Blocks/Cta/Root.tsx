import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export type CtaProps = ComponentProps<'div'>;

export const Cta = ({ className, ...props }: CtaProps) => {
  return (
    <div
      className={cn('', className)}
      {...props}
    />
  );
};
