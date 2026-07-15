'use client';

import { Progress, ProgressProps } from '@/components/feedback';
import { useCarouselContext } from '@/hooks/contexts';
import { MergeProps } from '@/types';

type CarouselProgressProps = MergeProps<
  Pick<Partial<ProgressProps>, 'value'>,
  ProgressProps
>;

const CarouselProgress = (props: CarouselProgressProps) => {
  const { state } = useCarouselContext();

  return (
    <Progress
      size='xs'
      value={state.progress * 100}
      {...props}
    />
  );
};

export { CarouselProgress };
export type { CarouselProgressProps };
