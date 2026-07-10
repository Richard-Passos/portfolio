'use client';

import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useCatalogContext } from '@/contexts/Catalog';

export type CatalogLastPageProps = SlotAsChildProps<ComponentProps<'section'>>;

export const CatalogLastPage = <T,>({ asChild, ...props }: CatalogLastPageProps) => {
  const { isLastPage } = useCatalogContext<T>();

  const Comp = asChild ? Slot : 'section';

  return isLastPage ? <Comp {...props} /> : null;
};
