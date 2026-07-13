'use client';

import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { useCatalogContext } from '@/contexts/Catalog';
import { cn } from '@/utils/cn';

export type CatalogListProps = SlotElementProps<'ul'>;

export const CatalogList = <T,>({ className, ...props }: CatalogListProps) => {
  const { isEmpty } = useCatalogContext<T>();

  return isEmpty ? null : (
    <SlotElement
      tag='ul'
      className={cn('m-0 list-none p-0', className)}
      {...props}
    />
  );
};
