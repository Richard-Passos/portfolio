'use client';

import { GridProjectCard } from '@/components/Cards/Project';
import CatalogList, {
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { Project } from '@/types';
import { cn } from '@/utils';

type ProjectsCatalogGridBlockOwnProps = {};

type ProjectsCatalogGridBlockProps = ProjectsCatalogGridBlockOwnProps &
  Omit<CatalogListRootProps, keyof ProjectsCatalogGridBlockOwnProps>;

const ProjectsCatalogGridBlock = ({
  className,
  ...props
}: ProjectsCatalogGridBlockProps) => {
  return (
    <CatalogList.Root
      className={cn(
        `grid w-full max-w-sm gap-2.5 sm:max-w-3xl sm:grid-cols-2`,
        className
      )}
      {...props}
    >
      <CatalogList.Items<Project>>
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
      </CatalogList.Items>
    </CatalogList.Root>
  );
};

export default ProjectsCatalogGridBlock;
export type { ProjectsCatalogGridBlockProps };
