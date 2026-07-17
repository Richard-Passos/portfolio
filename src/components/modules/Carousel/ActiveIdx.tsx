'use client';

import { Text, TextProps } from '@/components/system/Text';
import { useCarouselContext } from '@/contexts/Carousel';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type CarouselActiveIdxProps = MergeProps<
  {
    length: number;
  },
  TextProps
>;

export const CarouselActiveIdx = ({ length, className, ...props }: CarouselActiveIdxProps) => {
  const { state } = useCarouselContext();

  const padLength = Math.max(length.toString().length, 2);
  const current = `${state.activeIdx + 1}`.padStart(padLength, '0');
  const max = length.toString().padStart(padLength, '0');

  return (
    <Text
      aria-hidden
      className={cn('flex text-xs font-semibold tabular-nums', className)}
      {...props}
    >
      {current} — {max}
    </Text>
  );
};
