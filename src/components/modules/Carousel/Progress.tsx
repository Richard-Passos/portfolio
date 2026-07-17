'use client';

import Progress, { ProgressProps } from '@/components/feedback/Progress';
import { useCarouselContext } from '@/contexts/Carousel';
import { MergeProps } from '@/types/MergeProps';

export type CarouselProgressProps = MergeProps<
  Pick<Partial<ProgressProps>, 'value'>,
  ProgressProps
>;

export const CarouselProgress = (props: CarouselProgressProps) => {
  const { state } = useCarouselContext();

  return (
    <Progress
      min={0}
      max={1}
      value={state.progress}
      {...props}
    >
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress>
  );
};
