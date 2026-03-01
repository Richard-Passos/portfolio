import { Card, CardRootProps } from '@/components/display/Card';
import { Icon, Title } from '@/components/system';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type BoldCardOwnProps = {
  data: {
    icon: string;
    description: Node[];
  };
};

type BoldCardProps = MergeProps<BoldCardOwnProps, CardRootProps>;

const BoldCard = ({ className, data, ...props }: BoldCardProps) => {
  return (
    <Card.Root
      className={cn('min-h-52 justify-between', className)}
      {...props}
    >
      <div className='size-8'>
        <Icon src={data.icon} />
      </div>

      <Title
        className='mt-2.5 leading-none font-medium'
        component='p'
        order={4}
      >
        {serialize(data.description)}
      </Title>
    </Card.Root>
  );
};

export { BoldCard };
export type { BoldCardProps };
