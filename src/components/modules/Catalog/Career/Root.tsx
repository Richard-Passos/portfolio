import CareerCard from '@/components/display/Card/Career';

import Catalog, { CatalogProps } from '@/components/modules/Catalog';
import { cn } from '@/utils/cn';
import { useIntlayer } from 'next-intlayer/server';

export type CareerCatalogProps = Omit<CatalogProps, 'items'>;

export const CareerCatalog = ({ className, ...props }: CareerCatalogProps) => {
  const t = useIntlayer('career-catalog');
  const isEmpty = t.items.length == 0;

  return (
    <Catalog
      className={cn('w-full max-w-6xl', className)}
      {...props}
    >
      {isEmpty && (
        <Catalog.Empty className='flex min-h-32 w-full items-center justify-center border bg-body p-5 text-center'>
          {t.empty}
        </Catalog.Empty>
      )}

      {!isEmpty && (
        <Catalog.List asChild>
          <CareerCard.Accordion
            className='w-full'
            defaultValue={['napead']}
          >
            {t.items.map((el, i) => (
              <CareerCard
                key={el.id.value}
                value={el.id.value}
              >
                <CareerCard.Header>
                  <CareerCard.Badge index={i} />

                  <div className='overflow-hidden'>
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
      )}
    </Catalog>
  );
};
