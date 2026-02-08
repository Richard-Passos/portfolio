import CatalogList, {
  CatalogListRootProps
} from '@/components/molecules/Catalog/List';
import { cn } from '@/utils';

import Items from './Items';

type ProjectsCatalogTableBlockTemplateOwnProps = {};

type ProjectsCatalogTableBlockTemplateProps =
  ProjectsCatalogTableBlockTemplateOwnProps &
    Omit<CatalogListRootProps, keyof ProjectsCatalogTableBlockTemplateOwnProps>;

const ProjectsCatalogTableBlockTemplate = ({
  className,
  ...props
}: ProjectsCatalogTableBlockTemplateProps) => {
  return (
    <CatalogList.Root
      className={cn('group/list', className)}
      {...props}
    >
      <Items />
    </CatalogList.Root>
  );
};

export default ProjectsCatalogTableBlockTemplate;
export type { ProjectsCatalogTableBlockTemplateProps };
