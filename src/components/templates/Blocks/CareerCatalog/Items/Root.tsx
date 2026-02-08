'use client';

import { CareerCard } from '@/components/Cards';
import {
  CatalogListItems,
  CatalogListItemsProps
} from '@/components/molecules/Catalog/List';
import { Career } from '@/types';

type CareerCatalogItemsBlockTemplateProps = CatalogListItemsProps<Career>;

const CareerCatalogItemsBlockTemplate = (
  props: CareerCatalogItemsBlockTemplateProps
) => {
  return (
    <CatalogListItems<Career> {...props}>
      {(data, i) => (
        <li
          key={data.slug}
          className='group/item relative mt-3 first:mt-0'
        >
          <CareerCard data={{ index: i, ...data }} />
        </li>
      )}
    </CatalogListItems>
  );
};

export default CareerCatalogItemsBlockTemplate;
export type { CareerCatalogItemsBlockTemplateProps };
