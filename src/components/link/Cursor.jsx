import { forwardRef } from 'react';

import { Link } from '../ui';
import { CursorArea, CursorHover } from '../ui/cursor';

const CursorLink = ({ content, variant, asChild, children, ...props }, ref) => {
  return (
    <CursorArea>
      <CursorHover
        content={{
          type: 'icon',
          name: 'ArrowUp',
          className: 'rotate-45',
          ...content,
        }}
        ref={ref}
        variant={{ scaleX: 1, scaleY: 1, ...variant }}
        {...props}
      >
        <Link asChild={asChild}>{children}</Link>
      </CursorHover>
    </CursorArea>
  );
};

export default forwardRef(CursorLink);
