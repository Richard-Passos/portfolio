'use client';

import { ComponentProps } from 'react';

import Slot, { AsChildProps } from '@/components/atoms/Slot';
import { useCatalogContext } from '@/hooks/contexts';
import { cn } from '@/utils';

type CatalogListMoleculeOwnProps = {};

type CatalogListMoleculeProps = AsChildProps<
  CatalogListMoleculeOwnProps &
    Omit<ComponentProps<'ul'>, keyof CatalogListMoleculeOwnProps>
>;

const CatalogListMolecule = ({
  asChild,
  className,
  ...props
}: CatalogListMoleculeProps) => {
  const { items } = useCatalogContext();

  if (items.size === 0) return null;

  if (asChild)
    return (
      <Slot
        className={className}
        {...props}
      />
    );

  return (
    <ul
      className={cn('m-0 list-none p-0', className)}
      {...(props as ComponentProps<'ul'>)}
    />
  );
};

export default CatalogListMolecule;
export type { CatalogListMoleculeProps };
