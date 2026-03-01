import CatalogList, {
  CatalogListRootProps
} from '@/components/modules/Catalog/List';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

import Items from './Items';

type ProjectsCatalogTableBlockOwnProps = {};

type ProjectsCatalogTableBlockProps = MergeProps<
  ProjectsCatalogTableBlockOwnProps,
  CatalogListRootProps
>;

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

export { ProjectsCatalogTableBlock };
export type { ProjectsCatalogTableBlockProps };
