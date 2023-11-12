'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { hideFollowPointer, showFollowPointer } from '@/redux';
import { isFunctionThanCall } from '@/utils';

const FollowPointerArea = ({ id, ...props }, ref) => {
  const dispatch = useDispatch();

  const show = () => dispatch(showFollowPointer({ id })),
    hide = () => dispatch(hideFollowPointer({ id }));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => hide, []);

  return (
    <Slot
      ref={ref}
      {...props}
      onMouseLeave={(ev) => {
        hide();

        isFunctionThanCall(props.onMouseLeave, ev);
      }}
      onMouseMove={(ev) => {
        show();

        isFunctionThanCall(props.onMouseMove, ev);
      }}
    />
  );
};

export default forwardRef(FollowPointerArea);
