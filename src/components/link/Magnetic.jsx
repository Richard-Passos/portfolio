import { forwardRef } from 'react';

import Magnetic from '../magnetic';
import { Link } from '../ui';

const MagneticLink = ({ asChild, children, ...props }, ref) => {
  return (
    <Magnetic
      limit={0.3}
      ref={ref}
      smoothConfig={{ damping: 5 }}
      {...props}
    >
      <Link asChild={asChild}>{children}</Link>
    </Magnetic>
  );
};

export default forwardRef(MagneticLink);
