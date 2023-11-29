import { forwardRef } from 'react';

import { FollowPointerArea } from '../follow-pointer';
import { CURSOR_ID } from './Root';

const CursorArea = (props, ref) => {
  return (
    <FollowPointerArea
      id={CURSOR_ID}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CursorArea);
