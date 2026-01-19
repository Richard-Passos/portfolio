'use client';

import { Text } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { useCarouselContext } from '@/hooks/contexts';
import { cn } from '@/utils';

type CarouselActiveIdxMoleculeOwnProps = {
  length: number;
};

type CarouselActiveIdxMoleculeProps = CarouselActiveIdxMoleculeOwnProps &
  Omit<TextProps, keyof CarouselActiveIdxMoleculeOwnProps>;

const CarouselActiveIdxMolecule = ({
  length,
  className,
  ...props
}: CarouselActiveIdxMoleculeProps) => {
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

export default CarouselActiveIdxMolecule;
export type { CarouselActiveIdxMoleculeProps };
