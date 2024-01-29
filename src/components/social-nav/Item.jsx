import { capitalize, cn } from '@/utils';

import { MagneticLink } from '../link';
import { Icon } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';

const SocialNavItem = ({ className, icon, name, ...props }) => {
  return (
    <MagneticLink
      className={cn(
        'group h-24 w-full flex-col items-stretch justify-between gap-3.5 rounded-sm border bg-main p-3.5 no-underline hover:bg-inverted hover:text-inverted-content sm:aspect-square',
        className,
      )}
      limit={0.15}
      {...props}
    >
      <div className='flex flex-wrap items-center justify-between gap-3.5'>
        <Icon
          className='h-6 w-6'
          name={icon}
        />

        <div className='relative flex items-center justify-center overflow-hidden'>
          <ArrowUpIcon className='h-3 w-3 rotate-45 transition-[transform,opacity] duration-500 ease-backOut group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0' />

          <ArrowUpIcon className='absolute h-3 w-3 -translate-x-full translate-y-full rotate-45 opacity-0 transition-[transform,opacity] duration-500 ease-backOut group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100' />
        </div>
      </div>

      <span className='text-xs'>{capitalize(name)}</span>
    </MagneticLink>
  );
};

export default SocialNavItem;
