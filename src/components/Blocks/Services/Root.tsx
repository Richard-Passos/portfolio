import { ServiceCard } from '@/components/Cards';
import { ServiceCardProps } from '@/components/Cards/Service';
import { Title } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import ServicesBlockImage from './Image';
import { ServicesBlockImageOrganismProps } from './Image/Root';

type ServicesBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] &
    ServicesBlockImageOrganismProps['data'] & {
      subtitle?: Node[];
      items: ServiceCardProps['data'][];
      action?: {
        label: Node[];
      };
    };
};

type ServicesBlockOrganismProps = ServicesBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof ServicesBlockOrganismOwnProps>;

const ServicesBlockOrganism = ({
  data,
  ...props
}: ServicesBlockOrganismProps) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <section className='w-9by10 flex max-w-5xl flex-col items-center'>
        {renderComp(
          <Title
            className='text-dimmed *:text-text mr-auto mb-4 uppercase'
            component='h3'
            order={6}
          >
            {serialize(data.subtitle)}
          </Title>,
          [data.subtitle]
        )}

        <div className='flex w-full items-start justify-end gap-4 md:gap-8'>
          <ServicesBlockImage
            className='grow basis-72 max-md:hidden'
            data={{
              image: data.image
            }}
          />

          <ul className='m-0 flex max-w-lg grow basis-(--container-sm) list-none flex-col gap-2.5 p-0 sm:py-8'>
            {data.items.map((data) => (
              <li key={data.slug}>
                <ServiceCard data={data} />
              </li>
            ))}
          </ul>
        </div>

        {renderComp(
          <Action
            as='link'
            className='mt-8'
            href='/contact'
            size='md'
            variant='default'
          >
            {serialize(data.action?.label)}
          </Action>,
          [data.action]
        )}
      </section>
    </PrimaryLayoutBlock>
  );
};

export default ServicesBlockOrganism;
export type { ServicesBlockOrganismProps };
