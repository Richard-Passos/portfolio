'use client';

import { TableProjectCard } from '@/components/Cards/Project';
import CatalogList, {
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { Project } from '@/types';
import { cn } from '@/utils';

type ProjectsCatalogTableBlockOrganismOwnProps = {};

type ProjectsCatalogTableBlockOrganismProps =
  ProjectsCatalogTableBlockOrganismOwnProps &
    Omit<CatalogListRootProps, keyof ProjectsCatalogTableBlockOrganismOwnProps>;

const ProjectsCatalogTableBlockOrganism = ({
  className,
  ...props
}: ProjectsCatalogTableBlockOrganismProps) => {
  return (
    <CatalogList.Root
      className={cn('group/list', className)}
      {...props}
    >
      <CatalogList.Items<Project>>
        {(data, i) => (
          <li
            className='mt-3 first:mt-0'
            key={data.slug}
          >
            <TableProjectCard
              data={{ index: i, ...data }}
              href={`projects/${data.slug}`}
            />
          </li>
        )}
      </CatalogList.Items>
    </CatalogList.Root>
  );
};

export default ProjectsCatalogTableBlockOrganism;
export type { ProjectsCatalogTableBlockOrganismProps };
