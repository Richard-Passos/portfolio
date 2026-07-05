'use client';

import {
  CatalogListItems,
  CatalogListItemsProps
} from '@/components/modules/Catalog/List';
import { GridProjectCard } from '@/components/organisms/Cards/Project';
import { Project } from '@/types';

type ProjectCatalogGridItemsBlockProps = CatalogListItemsProps<Project>;

const ProjectCatalogGridItemsBlock = (
  props: ProjectCatalogGridItemsBlockProps
) => {
  return (
    <CatalogListItems<Project> {...props}>
      {([key, data]) => (
        <li
          className='h-fit sm:even:mt-16 sm:not-last:even:-mb-16'
          key={key}
        >
          <GridProjectCard
            data={data}
            href={`projects/${key}`}
          />
        </li>
      )}
    </CatalogListItems>
  );
};

export { ProjectCatalogGridItemsBlock };
export type { ProjectCatalogGridItemsBlockProps };
