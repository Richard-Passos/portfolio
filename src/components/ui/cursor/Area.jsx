import { forwardRef } from 'react';

import { FollowPointerArea } from '../follow-pointer';
import { CURSOR_CONTENT_ID } from './Content';
import { CURSOR_ID } from './Root';

const CursorArea = (props, ref) => {
  return (
    <FollowPointerArea
      id={[CURSOR_ID, CURSOR_CONTENT_ID]}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CursorArea);
