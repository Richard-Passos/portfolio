import { capitalize, cn } from '@/utils';

import { MagneticLink } from '../link';

const SocialNavItem = ({ name, className, ...props }) => {
  return (
    <MagneticLink
      className={cn('rounded-sm px-3 py-1.5 text-sm', className)}
      {...props}
    >
      {capitalize(name)}
    </MagneticLink>
  );
};

export default SocialNavItem;
