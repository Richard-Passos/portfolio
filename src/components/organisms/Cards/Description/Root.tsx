import { forwardRef } from 'react';

import { Badge } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type DescriptionCardOrganismOwnProps = {
  data: {
    title: string;
    description: Node[];
  };
};

type DescriptionCardOrganismProps = DescriptionCardOrganismOwnProps &
  Omit<CardRootProps, keyof DescriptionCardOrganismOwnProps>;

const DescriptionCardOrganism = (
  { className, data, ...props }: DescriptionCardOrganismProps,
  ref: DescriptionCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('min-h-52 justify-between', className)}
      ref={ref}
      {...props}
    >
      <Badge
        className='text-dimmed'
        color='gray'
        size='md'
        variant='light'
      >
        {data.title}
      </Badge>

      <section className='mt-lg flex flex-col gap-sm'>
        {serialize(data.description, {
          paragraph: {
            className: 'text-dimmed *:text-text'
          }
        })}
      </section>
    </Card.Root>
  );
};

export default forwardRef(DescriptionCardOrganism);
export type { DescriptionCardOrganismProps };
