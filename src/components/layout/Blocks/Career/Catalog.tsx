import {
  CareerCatalog as CareerCatalogVariant,
  CareerCatalogProps as CareerCatalogVariantProps
} from '@/components/modules/Catalog/Career';
import { cn } from '@/utils/cn';

export type CareerCatalogProps = CareerCatalogVariantProps;

export const CareerCatalog = ({ className, ...props }: CareerCatalogProps) => {
  return (
    <CareerCatalogVariant
      id='work'
      className={cn('w-9/10', className)}
      {...props}
    />
  );
};
