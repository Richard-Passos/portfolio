import { Badge, Text, Title } from '@/components/atoms';
import { CardRoot, CardRootProps } from '@/components/atoms/Card';
import { Career } from '@/types';
import { cn, values } from '@/utils';

type CareerCardOrganismOwnProps = {
  data: Career & { index: number };
};

type CareerCardOrganismProps = CareerCardOrganismOwnProps &
  Omit<CardRootProps, keyof CareerCardOrganismOwnProps>;

const CareerCardOrganism = ({
  className,
  data,
  ...props
}: CareerCardOrganismProps) => (
  <CardRoot
    className={cn('flex-row gap-2.5 px-[7.5%] py-8', className)}
    {...props}
  >
    <Badge
      color='red'
      variant='default'
      className='mb-auto shrink-0 translate-y-0.5'
    >
      {`${data.index + 1}`.padStart(2, 'Ø')}/
    </Badge>

    <section className='mr-4 grow'>
      <Title
        className='shrink-0 basis-full overflow-hidden'
        order={5}
      >
        {data.title}
      </Title>

      <Text className='text-dimmed mt-2 line-clamp-2 text-sm tracking-wider wrap-break-word lowercase'>
        <span className='text-xs'>{data.year}</span>
        {' / '}
        {values(data.roles)
          .toSorted((a, b) => a.localeCompare(b))
          .join(' & ')}
      </Text>

      <Text className='border-border mt-6 border-t pt-3 text-sm leading-relaxed tracking-wide whitespace-pre-line'>
        {data.description}
      </Text>
    </section>
  </CardRoot>
);

export default CareerCardOrganism;
export type { CareerCardOrganismProps };
