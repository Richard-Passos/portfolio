'use client';

import {
  CatalogListItems,
  CatalogListItemsProps
} from '@/components/molecules/Catalog/List';
import { CareerCard } from '@/components/organisms/Cards';
import { Career } from '@/types';

type CareerCatalogItemsBlockProps = CatalogListItemsProps<Career>;

const CareerCatalogItemsBlock = (props: CareerCatalogItemsBlockProps) => {
  return (
    <CatalogListItems<Career> {...props}>
      {([key, data], i) => (
        <li
          key={key}
          className='group/item relative mt-3 first:mt-0'
        >
          <CareerCard data={{ index: i, ...data }} />
        </li>
      )}
    </CatalogListItems>
  );
};

export default CareerCatalogItemsBlock;
export type { CareerCatalogItemsBlockProps };
