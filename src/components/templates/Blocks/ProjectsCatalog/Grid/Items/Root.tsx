'use client';

import { GridProjectCard } from '@/components/Cards/Project';
import {
  CatalogListItems,
  CatalogListItemsProps
} from '@/components/molecules/Catalog/List';
import { Project } from '@/types';

type ProjectCatalogGridItemsBlockTemplateProps = CatalogListItemsProps<Project>;

const ProjectCatalogGridItemsBlockTemplate = (
  props: ProjectCatalogGridItemsBlockTemplateProps
) => {
  return (
    <CatalogListItems<Project> {...props}>
      {(data) => (
        <li
          className='h-fit sm:even:mt-16 sm:not-last:even:-mb-16'
          key={data.slug}
        >
          <GridProjectCard
            data={data}
            href={`projects/${data.slug}`}
          />
        </li>
      )}
    </CatalogListItems>
  );
};

export default ProjectCatalogGridItemsBlockTemplate;
export type { ProjectCatalogGridItemsBlockTemplateProps };
