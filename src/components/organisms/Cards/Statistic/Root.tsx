import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { Statistic } from '@/types';
import { cn } from '@/utils';

type StatisticCardOrganismOwnProps = {
  data: Statistic;
  valueProps?: Partial<TitleProps>;
  titleProps?: Partial<TitleProps>;
};

type StatisticCardOrganismProps = StatisticCardOrganismOwnProps &
  Omit<CardRootProps, keyof StatisticCardOrganismOwnProps>;

const StatisticCardOrganism = ({
  className,
  data,
  valueProps,
  titleProps,
  ...props
}: StatisticCardOrganismProps) => {
  return (
    <Card.Root
      className={cn(
        'gap-sm py-xl min-h-52 justify-between px-[7.5%]',
        className
      )}
      {...props}
    >
      <Title
        component='p'
        order={1}
        {...valueProps}
        className={cn('leading-none font-semibold', valueProps?.className)}
      >
        {data.value}
      </Title>

      <Title
        component='h4'
        order={5}
        {...titleProps}
        className={cn(
          `text-dimmed ml-auto text-end leading-none font-semibold whitespace-pre-line`,
          titleProps?.className
        )}
      >
        {data.title}
      </Title>
    </Card.Root>
  );
};

export default StatisticCardOrganism;
export type { StatisticCardOrganismProps };
