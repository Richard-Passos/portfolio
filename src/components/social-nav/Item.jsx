import { capitalize, cn } from '@/utils';

import { MagneticLink } from '../link';
import { Icon } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';

const SocialNavItem = ({ className, icon, name, ...props }) => {
  return (
    <MagneticLink
      className={cn(
        'hover:dark group h-full w-full flex-col items-start justify-start gap-1.5 rounded-sm border bg-main p-3.5 no-underline sm:aspect-square',
        className,
      )}
      limit={0.15}
      {...props}
    >
      <Icon
        className='h-6 w-6'
        name={icon}
      />

      <span className='text-xs'>{capitalize(name)}</span>

      <div className='absolute bottom-0 left-3.5 translate-y-1/2 rounded-full border border-transparent p-1.5 transition-transform duration-500 ease-backOut group-hover:translate-x-1/4'>
        <ArrowUpIcon className='relative z-10 h-3 w-3 rotate-45' />

        <span className='absolute -inset-px rounded-inherit border bg-main transition-colors' />
      </div>
    </MagneticLink>
  );
};

export default SocialNavItem;
