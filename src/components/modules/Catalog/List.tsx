'use client';

import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc';
import { useCatalogContext } from '@/hooks/contexts';
import { cn } from '@/utils';

type CatalogListProps = SlotAsChildProps<ComponentProps<'section'>>;

const CatalogList = <T,>({
  asChild,
  className,
  ...props
}: CatalogListProps) => {
  const { isEmpty } = useCatalogContext<T>();

  const Comp = asChild ? Slot : 'section';

  return isEmpty ? null : (
    <Comp
      className={cn('m-0 list-none p-0', className)}
      {...props}
    />
  );
};

export { CatalogList };
export type { CatalogListProps };
