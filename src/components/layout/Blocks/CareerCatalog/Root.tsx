import { Card } from '@/components/atoms';
import PrimaryLayout, {
  PrimaryLayoutProps
} from '@/components/layout/wrappers/Primary';
import { Catalog } from '@/components/molecules';
import { Career } from '@/types';
import { MergeProps } from '@/types';
import { cn, serialize } from '@/utils';
import { Node } from '@/utils/serialize';

import Items from './Items';

type CareerCatalogBlockOwnProps = {
  data: PrimaryLayoutProps['data'] & {
    empty: Node[];
    items: Record<string, Career>;
  };
};

type CareerCatalogBlockProps = MergeProps<
  CareerCatalogBlockOwnProps,
  PrimaryLayoutProps
>;

const CareerCatalogBlock = ({
  data,
  className,
  ...props
}: CareerCatalogBlockProps) => {
  return (
    <PrimaryLayout
      data={{
        title: data.title,
        description: data.description
      }}
      className={cn('w-9by10 3xl:min-h-fit min-h-fit lg:flex-row', className)}
      headerProps={{
        className: 'flex-col lg:w-fit lg:mr-8 lg:mb-auto md:items-start'
      }}
      {...props}
    >
      <Catalog.Root
        className='w-9by10 max-w-4xl'
        items={data.items}
      >
        <Catalog.Empty className='flex w-full'>
          <Card.Root className='min-h-52 items-center justify-center text-center'>
            {serialize(data.empty)}
          </Card.Root>
        </Catalog.Empty>

        <Catalog.List.Root className='group/list'>
          <Items />
        </Catalog.List.Root>
      </Catalog.Root>
    </PrimaryLayout>
  );
};

export { CareerCatalogBlock };
export type { CareerCatalogBlockProps };
