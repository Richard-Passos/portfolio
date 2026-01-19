import { Card, CardProps, createPolymorphicComponent } from '@mantine/core';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type CardMoleculeOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type CardMoleculeProps = CardMoleculeOwnProps &
  Omit<CardProps, keyof CardMoleculeOwnProps | 'Section'>;

const CardMolecule = ({ className, ...props }: CardMoleculeProps) => {
  return (
    <Card
      className={cn('bg-body size-full border', className)}
      padding='lg'
      radius='md'
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', CardMoleculeProps>(
  CardMolecule
);
export type { CardMoleculeProps };
