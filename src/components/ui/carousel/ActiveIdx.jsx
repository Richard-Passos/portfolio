'use client';

import { useContext } from 'react';

import { CarouselContext } from '@/contexts';
import { cn } from '@/utils';

import { Text } from '../text';

const CarouselActiveIdx = ({ itemsLength, className, ...props }) => {
  const { activeIdx } = useContext(CarouselContext);

  return (
    <Text
      aria-label={`Index ${activeIdx} of ${itemsLength}`}
      className={cn(
        'flex gap-font-blank-space text-xs font-semibold',
        className,
      )}
      {...props}
    >
      <span className='relative'>
        <span className='absolute right-0 top-0'>
          {`${activeIdx + 1}`.padStart(2, '0')}
        </span>

        <span className='invisible'>00</span>
      </span>
      — {itemsLength}
    </Text>
  );
};

export default CarouselActiveIdx;
