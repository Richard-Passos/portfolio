'use client';

import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogLastPageProps = SlotAsChildProps<ComponentProps<'section'>>;

const CatalogLastPage = <T,>({ asChild, ...props }: CatalogLastPageProps) => {
  const { isLastPage } = useCatalogContext<T>();

  const Comp = asChild ? Slot : 'section';

  return isLastPage ? <Comp {...props} /> : null;
};

export { CatalogLastPage };
export type { CatalogLastPageProps };
