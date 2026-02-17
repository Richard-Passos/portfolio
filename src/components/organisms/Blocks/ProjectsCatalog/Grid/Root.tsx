import {
  CatalogListRoot,
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { cn } from '@/utils';

import Items from './Items';

type ProjectsCatalogGridBlockOwnProps = {};

type ProjectsCatalogGridBlockProps = ProjectsCatalogGridBlockOwnProps &
  Omit<CatalogListRootProps, keyof ProjectsCatalogGridBlockOwnProps>;

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

export default ProjectsCatalogGridBlock;
export type { ProjectsCatalogGridBlockProps };
