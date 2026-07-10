'use client';

import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useCatalogContext } from '@/contexts/Catalog';

export type CatalogEmptyProps = SlotAsChildProps<ComponentProps<'section'>>;

export const CatalogEmpty = <T,>({ asChild, ...props }: CatalogEmptyProps) => {
  const { isEmpty } = useCatalogContext<T>();

  const Comp = asChild ? Slot : 'section';

  return isEmpty ? <Comp {...props} /> : null;
};
