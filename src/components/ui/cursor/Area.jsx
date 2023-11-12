import { forwardRef } from 'react';

import { FollowPointerArea } from '../follow-pointer';

const CursorArea = (props, ref) => {
  return (
    <FollowPointerArea
      id='follow-pointer-cursor'
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CursorArea);
