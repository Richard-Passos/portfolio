'use client';

import { Text, TextProps } from '@/components/system';
import { useCarouselContext } from '@/hooks/contexts';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type CarouselActiveIdxProps = MergeProps<
  {
    length: number;
  },
  TextProps
>;

const CarouselActiveIdx = ({
  length,
  className,
  ...props
}: CarouselActiveIdxProps) => {
  const { state } = useCarouselContext();

  const padLength = Math.max(length.toString().length, 2);

  return (
    <Text
      aria-hidden
      className={cn('flex text-xs font-semibold', className)}
      {...props}
    >
      <span className='relative'>
        <span className='absolute top-0 right-0'>
          {`${state.activeIdx + 1}`.padStart(padLength, '0')}
        </span>

        <span className='invisible'>{'0'.padStart(padLength, '0')}</span>
      </span>
      &nbsp;— {length.toString().padStart(padLength, '0')}
    </Text>
  );
};

export { CarouselActiveIdx };
export type { CarouselActiveIdxProps };
