'use client';

import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useCatalogContext } from '@/contexts/Catalog';
import { cn } from '@/utils/cn';

export type CatalogListProps = SlotAsChildProps<ComponentProps<'ul'>>;

export const CatalogList = <T,>({ asChild, className, ...props }: CatalogListProps) => {
  const { isEmpty } = useCatalogContext<T>();

  const Comp = asChild ? Slot : 'ul';

  return isEmpty ? null : (
    <Comp
      className={cn('m-0 list-none p-0', className)}
      {...props}
    />
  );
};
