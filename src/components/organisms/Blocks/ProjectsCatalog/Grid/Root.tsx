'use client';

import CatalogList, {
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { GridProjectCard } from '@/components/organisms/Cards/Project';
import { Project } from '@/types';
import { cn } from '@/utils';

type ProjectsCatalogGridBlockOrganismOwnProps = {};

type ProjectsCatalogGridBlockOrganismProps =
  ProjectsCatalogGridBlockOrganismOwnProps &
    Omit<CatalogListRootProps, keyof ProjectsCatalogGridBlockOrganismOwnProps>;

const ProjectsCatalogGridBlockOrganism = ({
  className,
  ...props
}: ProjectsCatalogGridBlockOrganismProps) => {
  return (
    <CatalogList.Root
      className={cn(
        `gap-xs grid w-full max-w-sm sm:max-w-3xl sm:grid-cols-2`,
        className
      )}
      {...props}
    >
      <CatalogList.Items<Project>>
        {(data) => (
          <li
            className={`sm:even:mt-2xl sm:not-last:even:-mb-2xl h-fit`}
            key={data.slug}
          >
            <GridProjectCard
              data={data}
              href={`projects/${data.slug}`}
            />
          </li>
        )}
      </CatalogList.Items>
    </CatalogList.Root>
  );
};

export default ProjectsCatalogGridBlockOrganism;
export type { ProjectsCatalogGridBlockOrganismProps };
