'use client';

import {
  CatalogListItems,
  CatalogListItemsProps
} from '@/components/modules/Catalog/List';
import { MagneticContainer } from '@/components/motion/Magnetic';
import { TableProjectCard } from '@/components/organisms/Cards/Project';
import { Project } from '@/types';

type ProjectCatalogTableItemsBlockProps = CatalogListItemsProps<Project>;

const ProjectCatalogTableItemsBlock = (
  props: ProjectCatalogTableItemsBlockProps
) => {
  return (
    <CatalogListItems<Project> {...props}>
      {([key, data], i) => (
        <MagneticContainer key={key}>
          <li className='group/item relative mt-3 first:mt-0'>
            <TableProjectCard
              data={{ index: i, ...data }}
              href={`projects/${key}`}
            />
          </li>
        </MagneticContainer>
      )}
    </CatalogListItems>
  );
};

export { ProjectCatalogTableItemsBlock };
export type { ProjectCatalogTableItemsBlockProps };
