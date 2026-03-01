import { Badge, Icon, Marquee, Title } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/display/Card';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type MarqueeCardOwnProps = {
  data: {
    icon: string;
    title: Node[];
    items: string[];
  };
};

type MarqueeCardProps = MergeProps<MarqueeCardOwnProps, CardRootProps>;

const MarqueeCard = ({ className, data, ...props }: MarqueeCardProps) => {
  return (
    <Card.Root
      className={cn('min-h-52', className)}
      {...props}
    >
      <div className='size-8'>
        <Icon src={data.icon} />
      </div>

      <Card.Section className='my-auto flex flex-col items-center justify-center'>
        <Title
          className='text-center'
          component='h4'
          order={5}
        >
          {serialize(data.title)}
        </Title>

        <Marquee
          className='mt-2'
          pauseOnHover
        >
          {data.items.map((item, i) => (
            <Badge
              size='lg'
              className='mx-1'
              key={item}
              {...(i % 2 !== 0 && {
                variant: 'light',
                color: 'gray'
              })}
            >
              {item}
            </Badge>
          ))}
        </Marquee>
      </Card.Section>
    </Card.Root>
  );
};

export { MarqueeCard };
export type { MarqueeCardProps };
