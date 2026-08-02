import {
  ProjectsCatalog as ProjectsCatalogVariant,
  ProjectsCatalogProps as ProjectsCatalogVariantProps
} from '@/components/modules/Catalog/Projects';
import { cn } from '@/utils/cn';

export type ProjectsCatalogProps = ProjectsCatalogVariantProps;

export const ProjectsCatalog = ({ className, ...props }: ProjectsCatalogProps) => {
  return (
    <ProjectsCatalogVariant
      className={cn('mt-12', className)}
      {...props}
    />
  );
};
