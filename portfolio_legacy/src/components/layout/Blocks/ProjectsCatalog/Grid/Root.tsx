import {
  CatalogListRoot,
  CatalogListRootProps
} from '@/components/modules/Catalog/List';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

import Items from './Items';

type ProjectsCatalogGridBlockOwnProps = {};

type ProjectsCatalogGridBlockProps = MergeProps<
  ProjectsCatalogGridBlockOwnProps,
  CatalogListRootProps
>;

const ProjectsCatalogGridBlock = ({
  className,
  ...props
}: ProjectsCatalogGridBlockProps) => {
  return (
    <CatalogListRoot
      className={cn(
        `grid w-full max-w-sm gap-2.5 sm:max-w-3xl sm:grid-cols-2`,
        className
      )}
      {...props}
    >
      <Items />
    </CatalogListRoot>
  );
};

export { ProjectsCatalogGridBlock };
export type { ProjectsCatalogGridBlockProps };
