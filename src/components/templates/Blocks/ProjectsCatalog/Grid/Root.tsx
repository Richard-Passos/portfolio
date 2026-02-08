import {
  CatalogListRoot,
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { cn } from '@/utils';

import Items from './Items';

type ProjectsCatalogGridBlockTemplateOwnProps = {};

type ProjectsCatalogGridBlockTemplateProps =
  ProjectsCatalogGridBlockTemplateOwnProps &
    Omit<CatalogListRootProps, keyof ProjectsCatalogGridBlockTemplateOwnProps>;

const ProjectsCatalogGridBlockTemplate = ({
  className,
  ...props
}: ProjectsCatalogGridBlockTemplateProps) => {
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

export default ProjectsCatalogGridBlockTemplate;
export type { ProjectsCatalogGridBlockTemplateProps };
