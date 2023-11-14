import { forwardRef } from 'react';

import Magnetic from '../magnetic';
import { Link } from '../ui';

const MagneticLink = ({ asChild, children, ...props }, ref) => {
  return (
    <Magnetic
      limit={0.25}
      ref={ref}
      {...props}
    >
      <Link asChild={asChild}>{children}</Link>
    </Magnetic>
  );
};

export default forwardRef(MagneticLink);
