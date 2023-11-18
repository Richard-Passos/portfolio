import { capitalize, cn } from '@/utils';

import { AnimationInView } from '../animation';
import { MagneticLink } from '../link';

const SocialNavItem = ({ name, className, href, ...props }) => {
  const animation = {
    variants: {
      hidden: { opacity: 0, y: '100%' },
      visible: {
        opacity: 1,
        y: '0%',
      },
    },
  };

  return (
    <AnimationInView
      animation={animation}
      className={cn(
        'text-sm focus-within:!translate-y-0 focus-within:!opacity-100',
        className,
      )}
      {...props}
    >
      <div>
        <MagneticLink className='aspect-square h-10 rounded-sm' href={href}>{capitalize(name)}</MagneticLink>
      </div>
    </AnimationInView>
  );
};

export default SocialNavItem;
