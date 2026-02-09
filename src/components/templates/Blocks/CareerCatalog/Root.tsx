import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/Layouts/Primary';
import { Card, Catalog } from '@/components/molecules';
import { Career } from '@/types';
import { cn, serialize } from '@/utils';
import { Node } from '@/utils/serialize';

import Items from './Items';

type CareerCatalogBlockTemplateOwnProps = {
  data: PrimaryLayoutsProps['data'] & {
    empty: Node[];
    items: Career[];
  };
};

type CareerCatalogBlockTemplateProps = CareerCatalogBlockTemplateOwnProps &
  Omit<PrimaryLayoutsProps, keyof CareerCatalogBlockTemplateOwnProps>;

const CareerCatalogBlockTemplate = ({
  data,
  className,
  ...props
}: CareerCatalogBlockTemplateProps) => {
  return (
    <PrimaryLayouts
      data={{
        title: data.title,
        description: data.description
      }}
      className={cn('3xl:min-h-fit min-h-fit lg:flex-row', className)}
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
    </PrimaryLayouts>
  );
};

export default CareerCatalogBlockTemplate;
export type { CareerCatalogBlockTemplateProps };
