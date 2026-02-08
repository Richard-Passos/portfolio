'use client';

import { TableProjectCard } from '@/components/Cards/Project';
import { MagneticContainer } from '@/components/atoms/Magnetic';
import {
  CatalogListItems,
  CatalogListItemsProps
} from '@/components/molecules/Catalog/List';
import { Project } from '@/types';

type ProjectCatalogTableItemsBlockTemplateProps =
  CatalogListItemsProps<Project>;

const ProjectCatalogTableItemsBlockTemplate = (
  props: ProjectCatalogTableItemsBlockTemplateProps
) => {
  return (
    <CatalogListItems<Project> {...props}>
      {(data, i) => (
        <MagneticContainer key={data.slug}>
          <li className='group/item relative mt-3 first:mt-0'>
            <TableProjectCard
              data={{ index: i, ...data }}
              href={`projects/${data.slug}`}
            />
          </li>
        </MagneticContainer>
      )}
    </CatalogListItems>
  );
};

export default ProjectCatalogTableItemsBlockTemplate;
export type { ProjectCatalogTableItemsBlockTemplateProps };
