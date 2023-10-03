'use client';

import { Slot } from '@radix-ui/react-slot';
import { useContext, useEffect, useRef } from 'react';

import { cn } from '@/utils';

import { CarouselContext } from './Root';

const Item = ({
  index,
  scrollIntoViewConfig,
  asChild,
  className,
  ...props
}) => {
  const ref = useRef(null);

  const { currentIdx } = useContext(CarouselContext);

  useEffect(() => {
    if (ref.current && currentIdx === index)
      ref.current.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        ...scrollIntoViewConfig,
      });
  }, [ref, currentIdx, index, scrollIntoViewConfig]);

  const Tag = asChild ? Slot : 'li';

  return (
    <Tag
      className={cn('snap-center', className)}
      ref={ref}
      {...props}
    />
  );
};

export default Item;
