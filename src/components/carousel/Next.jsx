'use client';

import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { CarouselContext } from './Root';

const Next = ({ asChild, ...props }) => {
  const { dispatch } = useContext(CarouselContext);

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      aria-label='Next slide'
      onClick={() => dispatch({ type: 'increment' })}
      {...props}
    />
  );
};

export default Next;
