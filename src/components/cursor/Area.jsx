'use client';

import { Slot } from '@radix-ui/react-slot';
import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';

const CursorArea = (props) => {
  const dispatch = useDispatch();

  return (
    <Slot
      onMouseLeave={() => dispatch(setVariant({ variant: { scale: 0 } }))}
      onMouseOver={() => dispatch(setVariant({ variant: { scale: 1 } }))}
      {...props}
    />
  );
};

export default CursorArea;
