import { ReactNode } from 'react';

import { LocalTime, Text, Title } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/display/Card';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type TimeCardOwnProps = {
  data: {
    title: Node[];
    time?: ReactNode;
  };
};

type TimeCardProps = MergeProps<TimeCardOwnProps, CardRootProps>;

const TimeCard = ({ className, data, ...props }: TimeCardProps) => {
  return (
    <Card.Root
      className={cn('min-h-52 items-center justify-center', className)}
      {...props}
    >
      <Title
        className='text-dimmed relative z-10 text-center text-sm'
        order={4}
      >
        {serialize(data.title)}
      </Title>

      <Text className='mt-1 text-center text-[14vw] leading-none font-bold sm:text-[min(8vw,6rem)]'>
        {data.time ? data.time : <LocalTime />}
      </Text>
    </Card.Root>
  );
};

export { TimeCard };
export type { TimeCardProps };
