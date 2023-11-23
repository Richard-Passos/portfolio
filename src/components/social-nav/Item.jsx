import { capitalize, cn } from '@/utils';

import { MagneticLink } from '../link';

const SocialNavItem = ({ className, index, href, name, ...props }) => {
  return (
    <div
      className={cn(
        'aspect-square h-10 translate-y-[--item-y] rounded-sm text-sm opacity-[--item-opacity] transition-all duration-300 ease-backOut group-hover:translate-y-0 group-hover:opacity-100 group-hover:[transition-delay:--delay]',
        className,
      )}
      style={{ '--delay': 0.1 * index + 's' }}
      {...props}
    >
      <MagneticLink
        className='h-full w-full rounded-inherit'
        href={href}
      >
        {capitalize(name)}
      </MagneticLink>
    </div>
  );
};

export default SocialNavItem;
