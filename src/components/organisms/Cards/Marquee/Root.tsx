import { Badge, Icon, Marquee, Title } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type MarqueeCardOrganismOwnProps = {
  data: {
    icon: string;
    title: Node[];
    items: string[];
  };
};

type MarqueeCardOrganismProps = MarqueeCardOrganismOwnProps &
  Omit<CardRootProps, keyof MarqueeCardOrganismOwnProps>;

const MarqueeCardOrganism = ({
  className,
  data,
  ...props
}: MarqueeCardOrganismProps) => {
  return (
    <Card.Root
      className={cn('min-h-52', className)}
      {...props}
    >
      <div className='size-8'>
        <Icon src={data.icon} />
      </div>

      <Card.Section
        className={`gap-sm my-auto flex flex-col items-center justify-center`}
      >
        <Title
          className='text-center'
          component='h4'
          order={5}
        >
          {serialize(data.title)}
        </Title>

        <Marquee
          className='[--gap:var(--spacing-xs)]'
          pauseOnHover
        >
          {data.items.map((item, i) => (
            <Badge
              {...(i % 2 !== 0 && {
                variant: 'light',
                color: 'gray'
              })}
              key={item}
              size='lg'
            >
              <li>{item}</li>
            </Badge>
          ))}
        </Marquee>
      </Card.Section>
    </Card.Root>
  );
};

export default MarqueeCardOrganism;
export type { MarqueeCardOrganismProps };
