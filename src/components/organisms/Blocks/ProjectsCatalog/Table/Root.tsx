import CatalogList, {
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { cn } from '@/utils';

import Items from './Items';

type ProjectsCatalogTableBlockOwnProps = {};

type ProjectsCatalogTableBlockProps = ProjectsCatalogTableBlockOwnProps &
  Omit<CatalogListRootProps, keyof ProjectsCatalogTableBlockOwnProps>;

const ProjectsCatalogTableBlock = ({
  className,
  ...props
}: ProjectsCatalogTableBlockProps) => {
  return (
    <CatalogList.Root
      className={cn('group/list', className)}
      {...props}
    >
      <Items />
    </CatalogList.Root>
  );
};

export default ProjectsCatalogTableBlock;
export type { ProjectsCatalogTableBlockProps };
