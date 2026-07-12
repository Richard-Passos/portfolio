import CareerCard from '@/components/display/Cards/Career';
import data from './.data';

import Catalog, { CatalogProps } from '@/components/modules/Catalog';
import { Career } from '@/types/Career';
import { cn } from '@/utils/cn';

export type CareerCatalogProps = Omit<CatalogProps<Career>, 'items'>;

export const CareerCatalog = ({ className, ...props }: CareerCatalogProps) => {
  return (
    <Catalog
      className={cn('w-full max-w-5xl', className)}
      items={data.items}
      {...props}
    >
      <Catalog.Empty className='flex w-full'>{data.empty}</Catalog.Empty>

      <Catalog.List asChild>
        <CareerCard.Accordion defaultValue={['napead']}>
          {data.items.map((el, i) => (
            <CareerCard
              key={el.id}
              value={el.id}
              className='not-first:-mt-px'
            >
              <CareerCard.Header>
                <CareerCard.Badge index={i} />

                <div>
                  <CareerCard.Title>{el.title}</CareerCard.Title>

                  <CareerCard.Extra
                    start={el.start}
                    end={el.end}
                    roles={el.roles}
                  />
                </div>

                <CareerCard.Trigger />
              </CareerCard.Header>

              <CareerCard.Text>{el.text}</CareerCard.Text>
            </CareerCard>
          ))}
        </CareerCard.Accordion>
      </Catalog.List>
    </Catalog>
  );
};
