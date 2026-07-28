import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type CatalogProps = SlotElementProps<'section'>;

export const Catalog = ({ className, ...props }: CatalogProps) => {
  return (
    <SlotElement
      tag='section'
      className={cn('flex flex-col items-center justify-center', className)}
      {...props}
    />
  );
};
