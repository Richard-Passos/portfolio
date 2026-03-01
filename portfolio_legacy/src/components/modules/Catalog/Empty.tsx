'use client';

import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogEmptyProps = SlotAsChildProps<ComponentProps<'section'>>;

const CatalogEmpty = <T,>({ asChild, ...props }: CatalogEmptyProps) => {
  const { isEmpty } = useCatalogContext<T>();

  const Comp = asChild ? Slot : 'section';

  return isEmpty ? <Comp {...props} /> : null;
};

export { CatalogEmpty };
export type { CatalogEmptyProps };
