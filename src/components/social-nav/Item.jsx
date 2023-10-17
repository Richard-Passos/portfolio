import { Link } from '@/patterns';
import { capitalize, cn } from '@/utils';

import Animation from '../animation';

const SocialNavItem = ({ name, className, href, ...props }) => {
  const animation = {
    variants: {
      hidden: {
        scale: 0,
      },
      visible: {
        scale: 1,
      },
    },
  };

  return (
    <Animation.InView
      animation={animation}
      aria-label={`My ${name.toLowerCase()} link`}
    >
      <Link
        className={cn('text-sm', className)}
        href={href}
        {...props}
      >
        {capitalize(name)}
      </Link>
    </Animation.InView>
  );
};

export default SocialNavItem;
