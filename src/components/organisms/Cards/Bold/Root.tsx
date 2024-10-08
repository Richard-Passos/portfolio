import { forwardRef } from 'react';

import { Icon, Title } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type BoldCardOrganismOwnProps = {
  data: {
    icon: string;
    description: Node[];
  };
};

type BoldCardOrganismProps = BoldCardOrganismOwnProps &
  Omit<CardRootProps, keyof BoldCardOrganismOwnProps>;

const BoldCardOrganism = (
  { className, data, ...props }: BoldCardOrganismProps,
  ref: BoldCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('min-h-52 justify-between', className)}
      ref={ref}
      {...props}
    >
      <div className='size-8'>
        <Icon src={data.icon} />
      </div>

      <Title
        className='mt-xs font-medium leading-none'
        component='p'
        order={4}
      >
        {serialize(data.description)}
      </Title>
    </Card.Root>
  );
};

export default forwardRef(BoldCardOrganism);
export type { BoldCardOrganismProps };
