import { ServiceCard } from '@/components/Cards';
import { ServiceCardProps } from '@/components/Cards/Service';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/Layouts/Primary';
import { Title } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import ServicesBlockTemplateImage from './Image';
import { ServicesBlockTemplateImageOrganismProps } from './Image/Root';

type ServicesBlockTemplateOwnProps = {
  data: PrimaryLayoutsProps['data'] &
    ServicesBlockTemplateImageOrganismProps['data'] & {
      subtitle?: Node[];
      items: ServiceCardProps['data'][];
      action?: {
        label: Node[];
      };
    };
};

type ServicesBlockTemplateProps = ServicesBlockTemplateOwnProps &
  Omit<PrimaryLayoutsProps, keyof ServicesBlockTemplateOwnProps>;

const ServicesBlockTemplate = ({
  data,
  ...props
}: ServicesBlockTemplateProps) => {
  return (
    <PrimaryLayouts
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
          <ServicesBlockTemplateImage
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
    </PrimaryLayouts>
  );
};

export default ServicesBlockTemplate;
export type { ServicesBlockTemplateProps };
