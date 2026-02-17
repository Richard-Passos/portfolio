import { Card, CardProps, createPolymorphicComponent } from '@mantine/core';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type CardAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type CardAtomProps = CardAtomOwnProps &
  Omit<CardProps, keyof CardAtomOwnProps | 'Section'>;

const CardAtom = ({ className, ...props }: CardAtomProps) => {
  return (
    <Card
      className={cn('bg-body size-full border text-current', className)}
      padding='lg'
      radius='md'
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', CardAtomProps>(CardAtom);
export type { CardAtomProps };
