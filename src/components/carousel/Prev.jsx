'use client';

import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { CarouselContext } from './Root';

const Prev = ({ asChild, ...props }) => {
  const { dispatch } = useContext(CarouselContext);

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      aria-label='Previous slide'
      onClick={() => dispatch({ type: 'decrement' })}
      {...props}
    />
  );
};

export default Prev;
