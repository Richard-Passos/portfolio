import { Icon } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/display/Card';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type SimpleCardOwnProps = {
  data: {
    icon: string;
    description: Node[];
  };
};

type SimpleCardProps = MergeProps<SimpleCardOwnProps, CardRootProps>;

const SimpleCard = ({ className, data, ...props }: SimpleCardProps) => {
  return (
    <Card.Root
      className={cn('flex-row items-center gap-2.5', className)}
      {...props}
    >
      <div className='size-6'>
        <Icon src={data.icon} />
      </div>

      <section>
        {serialize(data.description, {
          paragraph: {
            className: 'font-medium leading-tight'
          }
        })}
      </section>
    </Card.Root>
  );
};

export { SimpleCard };
export type { SimpleCardProps };
