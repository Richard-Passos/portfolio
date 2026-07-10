import CareerCard from '@/components/display/Cards/Career';
import data from './.data';

import Catalog, { CatalogProps } from '@/components/modules/Catalog';
import { Career } from '@/types/Career';
import { cn } from '@/utils/cn';

export type CareerCatalogProps = Omit<CatalogProps<Career>, 'items'>;

export const CareerCatalog = ({ className, ...props }: CareerCatalogProps) => {
  return (
    <Catalog
      className={cn('w-full max-w-4xl', className)}
      items={data.items}
      {...props}
    >
      <Catalog.Empty className='flex w-full'>{data.empty}</Catalog.Empty>

      <Catalog.List className='group/list'>
        {data.items.map((el, i) => (
          <CareerCard key={el.id}>
            <CareerCard.Header>
              <CareerCard.Badge index={i} />

              <div>
                <CareerCard.Title>{el.title}</CareerCard.Title>

                <CareerCard.Extra
                  start={el.start}
                  end={el.end}
                  roles={el.roles}
                  present={data.present}
                />
              </div>

              <CareerCard.Trigger />
            </CareerCard.Header>

            <CareerCard.Text>{el.text}</CareerCard.Text>
          </CareerCard>
        ))}
      </Catalog.List>
    </Catalog>
  );
};
