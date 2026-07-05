'use client';

import {
  CatalogListItems,
  CatalogListItemsProps
} from '@/components/modules/Catalog/List';
import { CareerCard } from '@/components/organisms/Cards';
import { Career } from '@/types';

import ScrollAnimate from './ScrollAnimate';

type CareerCatalogItemsBlockProps = CatalogListItemsProps<Career>;

const CareerCatalogItemsBlock = (props: CareerCatalogItemsBlockProps) => {
  return (
    <CatalogListItems<Career> {...props}>
      {([key, data], i) => (
        <ScrollAnimate key={key}>
          <li className='group/item relative mt-3 first:mt-0'>
            <CareerCard data={{ index: i, ...data }} />
          </li>
        </ScrollAnimate>
      )}
    </CatalogListItems>
  );
};

export { CareerCatalogItemsBlock };
export type { CareerCatalogItemsBlockProps };
